/*
 * @Author: iuukai
 * @Date: 2022-06-07 01:21:15
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:42:13
 * @FilePath: \vercel\GitAPI\module\github\users.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 获取用户列表
module.exports = (method, query, request) => {
	return request(method, 'https://api.github.com/users', query)
}
