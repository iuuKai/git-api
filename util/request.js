/*
 * @Author: iuukai
 * @Date: 2022-06-06 20:03:51
 * @LastEditors: iuukai
 * @LastEditTime: 2023-06-29 06:12:03
 * @FilePath: \vercel\GitAPI\util\request.js
 * @Description:
 * @QQ/微信: 790331286
 */
const axios = require('axios')
const parseLinkHeader = require('parse-link-header')
const http = require('http')
const https = require('https')
const { URLSearchParams } = require('url')
const { removeQuotes } = require('./custom')
// request.debug = true // 开启可看到更详细信息
const UNKNOWN_ERROR = '未知错误'

function delTokenInData(data) {
	for (const k in data) {
		if (k.toUpperCase().indexOf('TOKEN') > -1) delete data[k]
	}
}

const createRequest = (method, url, data, token) => {
	console.log(method, url, data, token)
	return new Promise((resolve, reject) => {
		const headers = {
			// 'User-Agent': 'request',
			Accept: 'application/json'
		}
		if (method.toUpperCase() === 'POST')
			headers['Content-Type'] = 'application/x-www-form-urlencoded'
		if (url.includes('api.github.com')) headers['Accept'] = 'application/vnd.github.v3+json'
		if (token) headers['Authorization'] = token
		const answer = { status: 500, body: {} }

		// 移除参数里的 token，params 参数里不可含有token
		delTokenInData(data)

		let settings = {
			method: method,
			url: url,
			data: new URLSearchParams(data).toString(),
			headers: headers,
			httpAgent: new http.Agent({ keepAlive: true }),
			httpsAgent: new https.Agent({ keepAlive: true })
		}
		if (method.toUpperCase() === 'GET') settings.params = data

		axios(settings)
			.then(res => {
				const body = res.data

				answer.body = {
					meta: { code: res.status, msg: res.statusText, targetURL: url },
					data: body
				}
				// 204 转为 200
				answer.status = res.status === 204 ? 200 : res.status

				// gitee 获取仓库时，total在响应头部
				if ('total_count' in res.headers) {
					answer.body.meta = Object.assign(answer.body.meta, {
						total_count: res.headers['total_count'],
						total_page: res.headers['total_page']
					})
				}
				if ('link' in res.headers) {
					answer.body.meta = Object.assign(
						answer.body.meta,
						removeQuotes(parseLinkHeader(res.headers.link))
					)
				}

				answer.status = 100 < answer.status && answer.status < 600 ? answer.status : 400

				if (answer.status === 200 && !body.error) resolve(answer)
				else reject(answer)
			})
			.catch(err => {
				answer.status = 502
				answer.body = {
					code: err?.response?.status ?? err.errno ?? 502,
					msg: err.code ?? UNKNOWN_ERROR,
					data: err?.response?.data ?? err.code ?? UNKNOWN_ERROR
				}
				reject(answer)
			})
	})
}

module.exports = createRequest
