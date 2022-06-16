/*
 * @Author: iuukai
 * @Date: 2022-06-07 19:18:55
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:36:16
 * @FilePath: \vercel\GitAPI\module\gitee\followers.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 列出授权用户的粉丝用户
module.exports = (method, query, request, token) => {
	return request(method, 'https://gitee.com/api/v5/user/followers', query, token)
}
