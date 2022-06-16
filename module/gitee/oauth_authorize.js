/*
 * @Author: iuukai
 * @Date: 2022-06-09 16:59:49
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 20:06:07
 * @FilePath: \vercel\GitAPI\module\gitee\oauth_authorize.js
 * @Description:
 * @QQ/微信: 790331286
 */

module.exports = (method, query, request) => {
	console.log(query)
	return new Promise((resolve, reject) => {
		const { client_id, redirect_uri } = query
		if (client_id && redirect_uri) {
			const url = `https://gitee.com/oauth/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(
				redirect_uri
			)}&response_type=code`
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
