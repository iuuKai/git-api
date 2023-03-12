/*
 * @Author: iuukai
 * @Date: 2023-01-04 21:34:57
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 21:34:58
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_branches.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取所有分支
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}/branches`, query, token)
}
