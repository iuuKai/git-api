/*
 * @Author: iuukai
 * @Date: 2023-01-02 14:40:43
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-02 14:40:44
 * @FilePath: \vercel\GitAPI\module\github\orgs_$org.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取一个组织
module.exports = (method, query, request, token) => {
	return request(method, `https://api.github.com/orgs/${query.org}`, {}, token)
}
