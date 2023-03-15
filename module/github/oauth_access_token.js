/*
 * @Author: iuukai
 * @Date: 2022-06-07 02:51:07
 * @LastEditors: iuukai
 * @LastEditTime: 2022-11-03 12:32:49
 * @FilePath: \vercel\GitAPI\module\github\oauth_access_token.js
 * @Description:
 * @QQ/微信: 790331286
 */
const config = require('../../config')

// 获取 access_token
module.exports = (method, query, request) => {
	const mode = process.env.NODE_ENV === 'production' ? 'build' : 'dev'
	query['client_id'] = config[mode]['github']['client_id']
	query['client_secret'] = config[mode]['github']['client_secret']
	return request(method, `https://github.com/login/oauth/access_token`, query)
}
