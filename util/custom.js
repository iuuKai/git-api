/*
 * @Author: iuukai
 * @Date: 2023-06-29 06:08:34
 * @LastEditors: iuukai
 * @LastEditTime: 2023-06-29 06:11:36
 * @FilePath: \vercel\GitAPI\util\custom.js
 * @Description:
 * @QQ/微信: 790331286
 */
// 移除对象里 key 或者 value 字符串里多余的引号
function removeQuotes(obj) {
	if (typeof obj !== 'object') {
		// 如果不是对象，直接返回
		return obj
	}
	for (let key in obj) {
		// 处理键名
		let newKey = key.replace(/(^')|('$)/g, '')

		// 如果是字符串，处理字符串里的引号
		if (typeof obj[key] === 'string') {
			obj[newKey] = obj[key].replace(/(^')|('$)/g, '')
		} else {
			// 如果不是字符串，递归继续处理
			obj[newKey] = removeQuotes(obj[key])
		}

		// 如果键名有变化，删除原来的键值对
		if (newKey !== key) {
			delete obj[key]
		}
	}
	return obj
}

module.exports = { removeQuotes }
