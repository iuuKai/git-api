/*
 * @Author: iuukai
 * @Date: 2023-01-04 03:30:34
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 05:37:24
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_contents.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库具体路径下的内容
module.exports = (method, query, request, token) => {
	const { owner, repo, path } = query
	return request(
		method,
		`https://gitee.com/api/v5/repos/${owner}/${repo}/contents${
			path ? '/' + encodeURIComponent(path) : ''
		}`,
		query,
		token
	)
}
