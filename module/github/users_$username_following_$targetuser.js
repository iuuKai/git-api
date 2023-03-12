/*
 * @Author: iuukai
 * @Date: 2022-06-08 04:56:31
 * @LastEditors: iuukai
 * @LastEditTime: 2022-12-28 17:01:53
 * @FilePath: \vercel\GitAPI\module\github\users_$username_following_$targetuser.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 获取指定用户是否关注目标用户
module.exports = (method, query, request, token) => {
	return request(
		method,
		`https://api.github.com/users/${query.username}/following/${query.targetuser}`,
		query,
		token
	)
}
