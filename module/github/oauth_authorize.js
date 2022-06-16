/*
 * @Author: iuukai
 * @Date: 2022-06-09 16:59:49
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-13 01:33:07
 * @FilePath: \vercel\GitAPI\module\github\oauth_authorize.js
 * @Description:
 * @QQ/微信: 790331286
 */

module.exports = (method, query, request) => {
	return new Promise((resolve, reject) => {
		const { client_id, redirect_uri } = query
		if (client_id && redirect_uri) {
			const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
			resolve({
				status: 200,
				body: {
					targetURL: url
				}
			})
		} else {
			reject({
				status: 400,
				body: {
					code: 400,
					err: '缺少请求参数!'
				}
			})
		}
	})
}
