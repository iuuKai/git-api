/*
 * @Author: iuukai
 * @Date: 2023-03-09 06:06:46
 * @LastEditors: iuukai
 * @LastEditTime: 2023-03-09 06:07:22
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_git_blobs_$sha.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取文件Blob
module.exports = (method, query, request, token) => {
	const { owner, repo, sha } = query
	return request(
		method,
		`https://api.github.com/repos/${owner}/${repo}/git/blobs/${sha}`,
		query,
		token
	)
}
