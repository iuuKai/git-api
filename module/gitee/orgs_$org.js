/*
 * @Author: iuukai
 * @Date: 2023-01-02 14:39:03
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-02 14:40:05
 * @FilePath: \vercel\GitAPI\module\gitee\orgs_$org.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取一个组织
module.exports = (method, query, request, token) => {
	return request(method, `https://gitee.com/api/v5/orgs/${query.org}`, {}, token)
}
