/*
 * @Author: iuukai
 * @Date: 2022-06-07 20:08:21
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:36:31
 * @FilePath: \vercel\GitAPI\module\gitee\following.js
 * @Description:
 * @QQ/微信: 790331286
 */

// 列出授权用户关注的用户
module.exports = (method, query, request, token) => {
	return request(method, 'https://gitee.com/api/v5/user/following', query, token)
}
