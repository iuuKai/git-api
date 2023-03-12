/*
 * @Author: iuukai
 * @Date: 2022-06-09 16:59:49
 * @LastEditors: iuukai
 * @LastEditTime: 2022-11-04 15:41:43
 * @FilePath: \vercel\GitAPI\module\github\oauth_authorize.js
 * @Description:
 * @QQ/微信: 790331286
 */
const config = require('../../config')

module.exports = (method, query, request) => {
	return new Promise((resolve, reject) => {
		const { redirect_uri } = query

		if (redirect_uri) {
			const client_id = config[process.env.MODE]['github']['client_id']
			const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
			resolve({
				status: 200,
				body: {
					data: {
						url
					},
					meta: {
						code: 200,
						msg: 'OK',
						targetURL: url
					}
				}
			})
		} else {
			reject({
				status: 400,
				body: {
					code: 400,
					msg: '缺少请求参数!'
				}
			})
		}
	})
}
