/*
 * @Author: iuukai
 * @Date: 2023-06-18 05:18:49
 * @LastEditors: iuukai
 * @LastEditTime: 2023-06-18 05:32:05
 * @FilePath: \vercel\GitAPI\module\bing\image.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 获取必应每日一图
module.exports = (method, query, request, token) => {
	const params = new URLSearchParams({
		format: 'js',
		idx: 0,
		n: 1,
		...query
	})
	return request(method, `https://www.bing.com/HPImageArchive.aspx?${params}`, {}, token)
}
