/*
 * @Author: iuukai
 * @Date: 2023-01-05 02:33:03
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-05 02:33:05
 * @FilePath: \vercel\GitAPI\module\github\users_$username_starred.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取用户star的仓库
module.exports = (method, query, request, token) => {
	return request(method, `https://api.github.com/users/${query.username}/starred`, query, token)
}
