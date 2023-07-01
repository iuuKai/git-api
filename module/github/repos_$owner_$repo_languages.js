/*
 * @Author: iuukai
 * @Date: 2023-04-11 10:45:19
 * @LastEditors: iuukai
 * @LastEditTime: 2023-04-11 10:45:41
 * @FilePath: \vercel\GitAPI\module\github\repos_$owner_$repo_languages.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取仓库语言列表
module.exports = (method, query, request, token) => {
	const { owner, repo } = query
	return request(method, `https://api.github.com/repos/${owner}/${repo}/languages`, query, token)
}
