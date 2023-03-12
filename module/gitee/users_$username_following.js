/*
 * @Author: iuukai
 * @Date: 2022-06-08 04:49:45
 * @LastEditors: iuukai
 * @LastEditTime: 2022-12-28 17:01:24
 * @FilePath: \vercel\GitAPI\module\gitee\users_$username_following.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 列出指定用户关注的用户
module.exports = (method, query, request, token) => {
	return request(method, `https://gitee.com/api/v5/users/${query.username}/following`, query, token)
}
