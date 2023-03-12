/*
 * @Author: iuukai
 * @Date: 2023-01-04 23:58:57
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-05 00:11:58
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_collaborators.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有成员
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(
		method,
		`https://gitee.com/api/v5/repos/${owner}/${repo}/collaborators`,
		query,
		token
	)
}
