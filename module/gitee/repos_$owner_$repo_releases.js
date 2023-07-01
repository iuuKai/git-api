/*
 * @Author: iuukai
 * @Date: 2023-06-28 18:51:16
 * @LastEditors: iuukai
 * @LastEditTime: 2023-06-28 18:51:46
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_releases.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有发行版
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/repos/${owner}/${repo}/releases`, query, token)
}
