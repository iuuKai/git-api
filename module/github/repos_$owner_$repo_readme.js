/*
 * @Author: iuukai
 * @Date: 2023-01-04 06:29:42
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 06:35:19
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_readme.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库README
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}/readme`, {}, token)
}
