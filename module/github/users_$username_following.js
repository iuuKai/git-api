/*
 * @Author: iuukai
 * @Date: 2022-06-08 04:49:45
 * @LastEditors: iuukai
 * @LastEditTime: 2022-12-28 17:02:01
 * @FilePath: \vercel\GitAPI\module\github\users_$username_following.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 列出指定用户关注的用户
module.exports = (method, query, request, token) => {
	return request(method, `https://api.github.com/users/${query.username}/following`, query, token)
}
