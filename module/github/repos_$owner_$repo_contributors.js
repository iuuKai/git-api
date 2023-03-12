/*
 * @Author: iuukai
 * @Date: 2023-01-04 06:34:56
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 23:46:38
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_contributors.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库贡献者
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}/contributors`, query, token)
}
