/*
 * @Author: iuukai
 * @Date: 2022-06-07 02:51:07
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 17:43:16
 * @FilePath: \vercel\GitAPI\module\gitee\access_token.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 获取 access_token
module.exports = (method, query, request) => {
	query['grant_type'] = 'authorization_code'
	return request(method, `https://gitee.com/oauth/token`, query)
}
