/*
 * @Author: iuukai
 * @Date: 2023-01-04 03:36:28
 * @LastEditors: iuukai
 * @LastEditTime: 2023-06-27 21:03:17
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_contents_$(path).js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库具体路径下的内容
module.exports = (method, query, request, token) => {
	const { owner, repo, path } = query
	console.log(111, query)
	return request(
		method,
		`https://api.github.com/repos/${owner}/${repo}/contents${
			path ? '/' + encodeURIComponent(path) : ''
		}`,
		query,
		token
	)
}
