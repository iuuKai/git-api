/*
 * @Author: iuukai
 * @Date: 2022-12-15 23:32:24
 * @LastEditors: iuukai
 * @LastEditTime: 2022-12-28 21:53:38
 * @FilePath: \vercel\GitAPI\module\gitee\users_$username_repos.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取某个用户的公开仓库
module.exports = (method, query, request, token) => {
	return request(method, `https://gitee.com/api/v5/users/${query.username}/repos`, query, token)
}
