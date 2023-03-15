/*
 * @Author: iuukai
 * @Date: 2022-06-07 02:51:07
 * @LastEditors: iuukai
 * @LastEditTime: 2022-11-03 11:06:22
 * @FilePath: \vercel\GitAPI\module\gitee\oauth_access_token.js
 * @Description:
 * @QQ/微信: 790331286
 */
const config = require('../../config')

// 获取 access_token
module.exports = (method, query, request) => {
	query['client_id'] = config['dev']['gitee']['client_id']
	query['client_secret'] = config['dev']['gitee']['client_secret']
	query['grant_type'] = 'authorization_code'
	return request(method, `https://gitee.com/oauth/token`, query)
}
