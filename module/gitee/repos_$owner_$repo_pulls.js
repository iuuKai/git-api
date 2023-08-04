/*
 * @Author: iuukai
 * @Date: 2023-07-13 18:25:32
 * @LastEditors: iuukai
 * @LastEditTime: 2023-07-13 18:25:32
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_pulls.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取Pull Request列表
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/repos/${owner}/${repo}/pulls`, query, token)
}
