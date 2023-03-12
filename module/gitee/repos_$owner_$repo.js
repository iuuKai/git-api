/*
 * @Author: iuukai
 * @Date: 2023-01-01 13:45:31
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-01 13:47:31
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取用户的某个仓库
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/repos/${owner}/${repo}`, {}, token)
}
