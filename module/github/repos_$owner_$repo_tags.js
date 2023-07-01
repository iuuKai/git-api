/*
 * @Author: iuukai
 * @Date: 2023-01-04 23:10:09
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 23:23:43
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_tags.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有tags
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}/tags`, query, token)
}
