/*
 * @Author: iuukai
 * @Date: 2022-06-08 01:14:23
 * @LastEditors: iuukai
 * @LastEditTime: 2022-12-28 17:01:45
 * @FilePath: \vercel\GitAPI\module\github\users_$username_followers.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 列出指定用户的关注者
module.exports = (method, query, request, token) => {
	return request(method, `https://api.github.com/users/${query.username}/followers`, query, token)
}
