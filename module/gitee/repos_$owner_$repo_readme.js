/*
 * @Author: iuukai
 * @Date: 2023-01-04 06:28:37
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 06:28:37
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_readme.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库README
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/repos/${owner}/${repo}/readme`, {}, token)
}
