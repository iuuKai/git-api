/*
 * @Author: iuukai
 * @Date: 2023-01-04 21:20:20
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 21:35:20
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_branches.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取所有分支
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/repos/${owner}/${repo}/branches`, query, token)
}
