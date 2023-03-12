/*
 * @Author: iuukai
 * @Date: 2023-01-02 21:06:44
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-02 21:06:45
 * @FilePath: \vercel\GitAPI\module\gitee\orgs_${org}_repos.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取一个组织的仓库
module.exports = (method, query, request, token) => {
	return request(method, `https://gitee.com/api/v5/orgs/${query.org}/repos`, query, token)
}
