/*
 * @Author: iuukai
 * @Date: 2022-06-08 01:14:23
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:35:55
 * @FilePath: \vercel\GitAPI\module\gitee\$username_followers.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 列出指定用户的关注者
module.exports = (method, query, request) => {
	return request(method, `https://gitee.com/api/v5/users/${query.username}/followers`, query)
}
