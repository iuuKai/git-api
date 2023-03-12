/*
 * @Author: iuukai
 * @Date: 2023-01-03 00:13:00
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-03 00:13:01
 * @FilePath: \vercel\GitAPI\module\github\orgs_$org_repos.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取一个组织的仓库
module.exports = (method, query, request, token) => {
	return request(method, `https://api.github.com/orgs/${query.org}/repos`, query, token)
}
