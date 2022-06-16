/*
 * @Author: iuukai
 * @Date: 2022-06-07 02:51:07
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:41:26
 * @FilePath: \vercel\GitAPI\module\github\access_token.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 获取 access_token
module.exports = (method, query, request) => {
	return request(method, `https://github.com/login/oauth/access_token`, query)
}
