/*
 * @Author: iuukai
 * @Date: 2023-01-06 13:19:55
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-06 13:36:54
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_$commits_$sha.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库某个提交
module.exports = (method, query, request, token) => {
	const { owner, repo, sha } = query
	return request(
		method,
		`https://api.github.com/repos/${owner}/${repo}/commits/${sha}`,
		query,
		token
	)
}
