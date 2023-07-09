/*
 * @Author: iuukai
 * @Date: 2023-07-04 14:29:54
 * @LastEditors: iuukai
 * @LastEditTime: 2023-07-04 14:39:04
 * @FilePath: \vercel\GitAPI\module\gitee\repos_$owner_$repo_issues.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库的所有Issues
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://gitee.com/api/v5/repos/${owner}/${repo}/issues`, query, token)
}
