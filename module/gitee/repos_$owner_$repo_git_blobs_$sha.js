/*
 * @Author: iuukai
 * @Date: 2023-03-09 06:05:08
 * @LastEditors: iuukai
 * @LastEditTime: 2023-03-09 06:05:57
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_git_blobs_$sha.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取文件Blob
module.exports = (method, query, request, token) => {
	const { owner, repo, sha } = query
	return request(
		method,
		`https://gitee.com/api/v5/repos/${owner}/${repo}/git/blobs/${sha}`,
		query,
		token
	)
}
