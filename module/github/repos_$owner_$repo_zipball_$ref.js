/*
 * @Author: iuukai
 * @Date: 2023-03-12 16:16:19
 * @LastEditors: iuukai
 * @LastEditTime: 2023-03-12 16:17:54
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_zipball_$ref.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 下载仓库 zip
module.exports = (method, query, request, token) => {
	const { owner, repo, sha } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}/zipball/${sha}`, {}, token)
}
