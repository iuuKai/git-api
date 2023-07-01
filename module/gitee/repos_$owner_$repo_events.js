/*
 * @Author: iuukai
 * @Date: 2023-06-22 01:17:57
 * @LastEditors: iuukai
 * @LastEditTime: 2023-06-22 01:18:28
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_events.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有动态
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/repos/${owner}/${repo}/events`, query, token)
}
