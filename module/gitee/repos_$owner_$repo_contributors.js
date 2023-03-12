/*
 * @Author: iuukai
 * @Date: 2023-01-04 06:33:38
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 23:46:34
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_contributors.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库贡献者
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(
		method,
		`https://gitee.com/api/v5/repos/${owner}/${repo}/contributors`,
		query,
		token
	)
}
