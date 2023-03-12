/*
 * @Author: iuukai
 * @Date: 2022-06-06 19:59:47
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-05 02:48:19
 * @FilePath: \vercel\GitAPI\module\gitee\users_$username.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取一个用户
module.exports = (method, query, request, token) => {
	return request(method, `https://gitee.com/api/v5/users/${query.username}`, {}, token)
}
