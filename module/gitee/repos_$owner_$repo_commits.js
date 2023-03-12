/*
 * @Author: iuukai
 * @Date: 2023-01-04 23:45:31
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-04 23:47:25
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_commits.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库所有提交
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/repos/${owner}/${repo}/commits`, query, token)
}
