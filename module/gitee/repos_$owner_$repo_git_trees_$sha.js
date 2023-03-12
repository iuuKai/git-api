/*
 * @Author: iuukai
 * @Date: 2023-01-03 21:42:11
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 03:36:12
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_git_trees_$sha.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取目录Tree
module.exports = (method, query, request, token) => {
	const { owner, repo, sha } = query
	return request(
		method,
		`https://gitee.com/api/v5/repos/${owner}/${repo}/git/trees/${sha}`,
		query,
		token
	)
}
