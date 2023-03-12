/*
 * @Author: iuukai
 * @Date: 2022-08-23 04:23:50
 * @LastEditors: iuukai
 * @LastEditTime: 2022-12-28 03:19:24
 * @FilePath: \vercel\GitAPI\module\github\user_repos.js
 * @Description:
 * @QQ/微信: 790331286
 */
/**
 * 列出授权用户的所有仓库
 * @param {*} method - <GET> 获取 | <PATCH> 更新
 * @param {*} query
 * @param {*} request
 * @param {*} token
 * @returns
 */
module.exports = (method, query, request, token) => {
	return request(method, 'https://api.github.com/user/repos', query, token)
}
