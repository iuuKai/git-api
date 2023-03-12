/*
 * @Author: iuukai
 * @Date: 2023-01-05 00:45:19
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-05 00:46:44
 * @FilePath: \vercel\GitAPI\module\gitee\networks_$owner_$repo_events.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有公开动态
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/networks/${owner}/${repo}/events`, query, token)
}
