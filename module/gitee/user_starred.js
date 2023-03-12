/*
 * @Author: iuukai
 * @Date: 2023-01-05 02:48:31
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-05 03:12:39
 * @FilePath: \vercel\GitAPI\module\gitee\user_starred.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取授权用户star的仓库
module.exports = (method, query, request, token) => {
	return request(method, `https://gitee.com/api/v5/user/starred`, query, token)
}
