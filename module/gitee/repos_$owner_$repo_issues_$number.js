/*
 * @Author: iuukai
 * @Date: 2023-07-06 16:34:51
 * @LastEditors: iuukai
 * @LastEditTime: 2023-07-06 16:51:17
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_issues_$number.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库的某个Issue
module.exports = (method, query, request, token) => {
	const { owner, repo, number } = query
	return request(
		method,
		`https://gitee.com/api/v5/repos/${owner}/${repo}/issues/${number}`,
		query,
		token
	)
}
