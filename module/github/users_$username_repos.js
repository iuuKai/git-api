/*
 * @Author: iuukai
 * @Date: 2022-12-20 13:17:37
 * @LastEditors: iuukai
 * @LastEditTime: 2022-12-28 02:14:48
 * @FilePath: \vercel\GitAPI\module\github\users_$username_repos.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取某个用户的公开仓库
module.exports = (method, query, request, token) => {
	return request(method, `https://api.github.com/users/${query.username}/repos`, query, token)
}
