/*
 * @Author: iuukai
 * @Date: 2022-06-06 19:59:47
 * @LastEditors: iuukai
 * @LastEditTime: 2022-06-09 00:40:06
 * @FilePath: \vercel\GitAPI\module\github\user.js
 * @Description:
 * @QQ/微信: 790331286
 */

/**
 *  当前授权用户信息
 * @param {*} method [ GET <获取> | PATCH <更新>]
 * @param {*} query
 * @param {*} request
 * @param {*} token
 * @returns
 */
module.exports = (method, query, request, token) => {
	return request(method, 'https://api.github.com/user', {}, token)
}
