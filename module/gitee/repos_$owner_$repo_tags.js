/*
 * @Author: iuukai
 * @Date: 2023-01-04 23:09:25
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 23:23:37
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_tags.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有tags
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/repos/${owner}/${repo}/tags`, {}, token)
}
