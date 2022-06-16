/*
 * @Author: iuukai
 * @Date: 2022-06-06 20:03:51
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 02:25:30
 * @FilePath: \vercel\GitAPI\util\request.js
 * @Description:
 * @QQ/微信: 790331286
 */
const axios = require('axios')
const http = require('http')
const https = require('https')
const { URLSearchParams } = require('url')
// request.debug = true // 开启可看到更详细信息

const createRequest = (method, url, data, token) => {
	console.log(method, url, data, token)
	return new Promise((resolve, reject) => {
		let headers = {
			// 'User-Agent': 'request',
			Accept: 'application/json'
		}
		if (method.toUpperCase() === 'POST')
			headers['Content-Type'] = 'application/x-www-form-urlencoded'
		if (url.includes('api.github.com')) headers['Accept'] = 'application/vnd.github.v3+json'
		if (token) headers['Authorization'] = token
		const answer = { status: 500, body: {} }
		let settings = {
			method: method,
			url: url,
			headers: headers,
			data: new URLSearchParams(data).toString(),
			httpAgent: new http.Agent({ keepAlive: true }),
			httpsAgent: new https.Agent({ keepAlive: true })
		}
		axios(settings)
			.then(res => {
				const body = res.data
				answer.body = { meta: { code: res.status, msg: res.statusText, targetURL: url } }
				try {
					answer.body.data = body
					// 204 转为 200
					answer.status = res.status === 204 ? 200 : res.status
				} catch (e) {
					// console.log(e)
					try {
						answer.body.data = JSON.parse(body.toString())
					} catch (err) {
						// console.log(err)
						// can't decrypt and can't parse directly
						answer.body.data = body
					}
					answer.status = res.status
				}

				answer.status = 100 < answer.status && answer.status < 600 ? answer.status : 400

				if (answer.status === 200) resolve(answer)
				else reject(answer)
			})
			.catch(err => {
				answer.status = 502
				answer.body = { code: 502, msg: err }
				reject(answer)
			})
	})
}

module.exports = createRequest
