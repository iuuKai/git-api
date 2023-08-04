/*
 * @Author: iuukai
 * @Date: 2023-07-13 18:26:06
 * @LastEditors: iuukai
 * @LastEditTime: 2023-08-05 05:45:26
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_pulls.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取Pull Request列表
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}/pulls`, query, token)
}
