/*
 * @Author: iuukai
 * @Date: 2022-06-09 21:52:54
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 21:57:37
 * @FilePath: \vercel\GitAPI\module\gitee\oauth_refresh_token.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 获取 refresh_token
module.exports = (method, query, request) => {
	return request(method, 'https://gitee.com/oauth/token', {
		grant_type: 'refresh_token',
		refresh_token: query['refresh_token']
	})
}
