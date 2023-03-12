/*
 * @Author: iuukai
 * @Date: 2022-06-07 01:33:17
 * @LastEditors: iuukai
 * @LastEditTime: 2022-12-28 17:02:09
 * @FilePath: \vercel\GitAPI\module\github\users_$username_hovercard.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 获取用户上下文信息
module.exports = (method, query, request, token) => {
	return request(method, `https://api.github.com/users/${username}/hovercard`, query, token)
}
