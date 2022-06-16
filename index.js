const fs = require('fs')
const path = require('path')
const express = require('express')
const request = require('./util/request')
// const fileUpload = require('express-fileupload')
const decode = require('safe-decode-uri-component')

/**
 * @typedef {{
 *   identifier?: string,
 *   route: string,
 *   module: any
 * }} ModuleDefinition
 */

/**
 * @typedef {{
 *  server?: import('http').Server,
 * }} ExpressExtension
 */

/**
 * Get the module definitions dynamically.
 *
 * @param {string} modulesPath The path to modules (JS).
 * @param {boolean} [doRequire] If true, require() the module directly.
 * Otherwise, print out the module path. Default to true.
 * @returns {Promise<ModuleDefinition[]>} The module definitions.
 *
 * @example getModuleDefinitions("./module", {"album_new.js": "/album/create"})
 */
async function getModulesDefinitions(modulesPath, doRequire = true) {
	const files = await fs.promises.readdir(modulesPath)

	const parseRoute = fileName =>
		// fileName.includes('access_token') || fileName.includes('refresh_token')
		/(access_token|refresh_token)/.test(fileName)
			? `/${fileName
					.replace(/\.js$/i, '')
					.replace(/_/g, '/')
					.replace(/\/token/gi, '_token')}`
			: !fileName.includes('$')
			? `/${fileName.replace(/\.js$/i, '').replace(/_/g, '/')}`
			: `/${fileName.replace(/\.js$/i, '').replace(/_/g, '/')}`.replace(/\/\$/g, '/:')

	const modules = files
		.reverse()
		.filter(file => file.endsWith('.js'))
		.map(file => {
			const identifier = file.split('.').shift()
			const route = parseRoute(file)
			const modulePath = path.join(modulesPath, file)
			const module = doRequire ? require(modulePath) : modulePath

			return { identifier, route, module }
		})

	return modules
}

/**
 * Construct the server of NCM API.
 *
 * @returns {Promise<import("express").Express>} The server instance.
 */
async function consturctServer() {
	const app = express()
	app.set('trust proxy', true)

	/**
	 * CORS & Preflight request
	 */
	app.use((req, res, next) => {
		if (req.path !== '/' && !req.path.includes('.')) {
			res.set({
				'Access-Control-Allow-Credentials': true,
				'Access-Control-Allow-Origin': req.headers.origin || '*',
				'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type,Authorization',
				'Access-Control-Allow-Methods': 'PUT,POST,GET,HEAD,PATCH,DELETE,OPTIONS',
				'Content-Type': 'application/json; charset=utf-8'
			})
		}
		req.method === 'OPTIONS' ? res.status(204).end() : next()
	})

	/**
	 * Body Parser and File Upload
	 */
	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))

	// app.use(fileUpload())

	/**
	 * Serving static files
	 */
	app.use(express.static(path.join(__dirname, '/public')))

	/**
	 * Load every modules in this directory
	 */
	app.use('/:git/:api(*)', async (req, res) => {
		const { git, api } = req.params
		const method = req.method
		const token = req.headers['authorization'] || ''
		const query = Object.assign({}, req.query, req.body, req.files)
		const reg = /(http|https):\/\/[^/\r\n\?]+\/[^\r\n\?]*(?!\?)?/
		// 捕捉客户端发送请求页面路径，当且仅当 localhost:3000/ 有效，不适用于 localhost:3000/xxx.html（可通过传参解决）
		if (
			git === 'gitee' &&
			!('redirect_uri' in query) &&
			req.headers.referer.match(reg) &&
			api.includes('oauth')
		)
			query['redirect_uri'] = req.headers.referer.match(reg)[0]
		const moduleDefinitions = await getModulesDefinitions(path.join(__dirname, `module/${git}`))
		const moduleDef = moduleDefinitions.find(({ route }) => {
			// 无变量的，直接判断路径是否相等
			if (route === `/${api}`) return true
			// 剩余的肯定是存在变量的了
			if (!route.includes(':')) return false
			const rArr = route.replace(/^\//, '').split('/')
			const aArr = api.replace(/\/$/, '').split('/')
			// 如果长度不一样肯定不匹配
			if (rArr.length !== aArr.length) return false
			// 用于记录变量
			const $variables = {}
			// 非变量计数
			let notVarCount = 0
			const $indexs = rArr.reduce((res, cur, i) => {
				cur.includes(':') && res.push(i)
				cur === aArr[i] && notVarCount++
				cur !== aArr[i] && ($variables[cur.slice(1)] = aArr[i])
				return res
			}, [])
			// 非变量数 + 变量下标集合长度，如果和分割后的原数组长度相同即为匹配
			if (notVarCount + $indexs.length !== rArr.length) return false
			// 把变量填充进 query
			Object.keys($variables).forEach(k => (query[k] = $variables[k]))
			return true
		})
		try {
			const moduleResponse = await moduleDef.module(method, query, request, token)
			console.log('[OK]', decode(req.originalUrl))
			console.log(moduleResponse)
			res.status(moduleResponse.status).send(moduleResponse.body)
		} catch (moduleResponse) {
			if (!moduleResponse.body) {
				res.status(404).send({
					code: 404,
					data: null,
					msg: 'Not Found'
				})
				return
			}
			console.log('Error', moduleResponse)
			res.status(moduleResponse.status).send(moduleResponse.body)
		}
	})

	return app
}

/**
 * Serve the NCM API.
 * @returns {Promise<import('express').Express & ExpressExtension>}
 */
async function serveNcmApi() {
	const port = Number(process.env.PORT || '3000')
	const host = process.env.HOST || ''
	const app = await consturctServer()

	/** @type {import('express').Express & ExpressExtension} */
	const appExt = app
	appExt.server = app.listen(port, host, () => {
		console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
	})

	return appExt
}

serveNcmApi()
