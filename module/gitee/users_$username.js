/*
 * @Author: iuukai
 * @Date: 2022-06-06 19:59:47
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:36:38
 * @FilePath: \vercel\GitAPI\module\gitee\user_$username.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 获取一个用户
module.exports = (method, query, request) => {
	return request(method, `https://gitee.com/api/v5/users/${query.username}`, {})
}
