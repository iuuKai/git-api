/*
 * @Author: iuukai
 * @Date: 2023-01-06 13:18:52
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-06 13:18:52
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_$commits_$sha.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库某个提交
module.exports = (method, query, request, token) => {
	const { owner, repo, sha } = query
	return request(
		method,
		`https://gitee.com/api/v5/repos/${owner}/${repo}/commits/${sha}`,
		{},
		token
	)
}
