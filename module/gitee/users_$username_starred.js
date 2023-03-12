/*
 * @Author: iuukai
 * @Date: 2023-01-05 02:31:53
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-05 02:31:55
 * @FilePath: \vercel\GitAPI\module\gitee\users_$username_starred.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取用户star的仓库
module.exports = (method, query, request, token) => {
	return request(method, `https://gitee.com/api/v5/users/${query.username}/starred`, query, token)
}
