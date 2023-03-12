/*
 * @Author: iuukai
 * @Date: 2023-01-05 00:47:04
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-05 00:47:04
 * @FilePath: \vercel\GitAPI\module\github\networks_$owner_$repo_events.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有公开动态
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/networks/${owner}/${repo}/events`, query, token)
}
