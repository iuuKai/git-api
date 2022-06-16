/*
 * @Author: iuukai
 * @Date: 2022-06-06 19:59:47
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:42:03
 * @FilePath: \vercel\GitAPI\module\github\user_$username.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 获取一个用户
module.exports = (method, query, request) => {
	return request(method, `https://api.github.com/users/${query.username}`, {})
}
