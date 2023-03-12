/*
 * @Author: iuukai
 * @Date: 2023-01-04 23:47:32
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 23:47:33
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_commits.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有提交
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}/commits`, query, token)
}
