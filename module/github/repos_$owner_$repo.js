/*
 * @Author: iuukai
 * @Date: 2023-01-01 16:04:35
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-01 16:13:43
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取用户的某个仓库
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}`, {}, token)
}
