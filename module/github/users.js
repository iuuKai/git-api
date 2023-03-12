/*
 * @Author: iuukai
 * @Date: 2022-06-07 01:21:15
 * @LastEditors: iuukai
 * @LastEditTime: 2022-12-28 17:02:21
 * @FilePath: \vercel\GitAPI\module\github\users.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 获取用户列表
module.exports = (method, query, request, token) => {
	return request(method, 'https://api.github.com/users', query, token)
}
