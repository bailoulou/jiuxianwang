/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


var data = [
	{ index: 1, content: '吃饭' },
	{ index: 2, content: '睡觉' },
	{ index: 3, content: '打豆豆' }
]
// 正在进行列表
var ol = document.querySelector('ol')
// 输入框
var conInp = document.querySelector('.title')
// 删除按钮
var delBtn = document.querySelectorAll('a')
// 添加按钮
var add = document.querySelector('.add')

bindHtml()
function bindHtml () {
	var str = ''
	for (var i = 0; i < data.length; i++) {
		str += '<li><input type="checkbox" /><p onclick="edit(' + (i + 1) + ')">'
		 + data[i].content + '</p><a href="javascript:remove(' + (i + 1) + ')">-</a></li>'
	}
	ol.innerHTML = str
}

add.onclick = function (e) {
	var content = conInp.value
	// if (e.keyCode == 13) {
		if (!content) return
		var obj = { 
			index: data.length ? data[data.length - 1].index + 1 : 1,
			content: content 
		}
		data.push(obj)
		conInp.value = ''
		bindHtml()
	// }

}


