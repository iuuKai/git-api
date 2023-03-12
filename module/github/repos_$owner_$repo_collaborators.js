/*
 * @Author: iuukai
 * @Date: 2023-01-05 00:00:05
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-05 00:12:03
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_collaborators.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有成员
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(
		method,
		`https://api.github.com/repos/${owner}/${repo}/collaborators`,
		query,
		token
	)
}
