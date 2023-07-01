/*
 * @Author: iuukai
 * @Date: 2023-04-08 00:08:26
 * @LastEditors: iuukai
 * @LastEditTime: 2023-04-08 00:09:51
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_releases_latest.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库最新的发行版
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}/releases/latest`, {}, token)
}
