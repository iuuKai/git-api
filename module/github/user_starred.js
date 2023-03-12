/*
 * @Author: iuukai
 * @Date: 2023-01-05 02:49:21
 * @LastEditors: iuukai
 * @LastEditTime: 2023-01-05 04:42:03
 * @FilePath: \vercel\GitAPI\module\github\user_starred.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取授权用户star的仓库
module.exports = (method, query, request, token) => {
	return request(method, `https://api.github.com/user/starred`, query, token)
}
