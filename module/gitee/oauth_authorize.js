/*
 * @Author: iuukai
 * @Date: 2022-06-09 16:59:49
 * @LastEditors: iuukai
 * @LastEditTime: 2023-03-15 08:34:26
 * @FilePath: \vercel\GitAPI\module\gitee\oauth_authorize.js
 * @Description:
 * @QQ/微信: 790331286
 */
const config = require('../../config')

module.exports = (method, query, request) => {
	return new Promise((resolve, reject) => {
		const { redirect_uri } = query
		return {
			status: 200,
			body: {
				data: {
					url
				},
				meta: {
					code: 200,
					msg: 'OK',
					targetURL: url,
					process
				}
			}
		}

		// 	if (redirect_uri) {
		// 		const client_id = config[process.env.MODE]['gitee']['client_id']
		// 		const url = `https://gitee.com/oauth/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(
		// 			redirect_uri
		// 		)}&response_type=code`
		// 		resolve({
		// 			status: 200,
		// 			body: {
		// 				data: {
		// 					url
		// 				},
		// 				meta: {
		// 					code: 200,
		// 					msg: 'OK',
		// 					targetURL: url,
		// 					header
		// 				}
		// 			}
		// 		})
		// 	} else {
		// 		reject({
		// 			status: 400,
		// 			body: {
		// 				code: 400,
		// 				err: '缺少请求参数!',
		// 				header
		// 			}
		// 		})
		// 	}
	})
}
