/*
 * @Author: iuukai
 * @Date: 2022-06-08 04:49:45
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:36:11
 * @FilePath: \vercel\GitAPI\module\gitee\$username_following.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 列出指定用户关注的用户
module.exports = (method, query, request) => {
	return request(method, `https://gitee.com/api/v5/users/${query.username}/following`, query)
}
