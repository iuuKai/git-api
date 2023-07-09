/*
 * @Author: iuukai
 * @Date: 2023-07-06 17:14:25
 * @LastEditors: iuukai
 * @LastEditTime: 2023-07-06 17:15:18
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_issues_$number_comments.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库某个Issue所有的评论
module.exports = (method, query, request, token) => {
	const { owner, repo, number } = query
	return request(
		method,
		`https://api.github.com/repos/${owner}/${repo}/issues/${number}/comments`,
		query,
		token
	)
}
