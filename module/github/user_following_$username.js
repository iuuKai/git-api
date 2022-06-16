/*
 * @Author: iuukai
 * @Date: 2022-06-07 20:27:34
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:48:59
 * @FilePath: \vercel\GitAPI\module\github\following_$username.js
 * @Description:
 * @QQ/微信: 790331286
 */

/**
 * 授权用户对一个用户进行操作
 * @param {*} method - <GET> 检查关注 | <PUT> 关注 | <DELETE> 取消关注
 * @param {*} query
 * @param {*} request
 * @param {*} token
 * @returns
 */
module.exports = (method, query, request, token) => {
	return request(method, `https://api.github.com/user/following/${query.username}`, {}, token)
}
