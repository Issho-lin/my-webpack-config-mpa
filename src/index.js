/*
 * @Description: 入口文件
 * @Author: linqibin
 * @Date: 2020-04-13 09:53:16
 * @LastEditTime: 2020-04-13 17:34:30
 * @LastEditors: linqibin
 */
import '@babel/polyfill'
import './css/reset.css'

const header = document.createElement('h1')
header.innerHTML = 'index'

const a = document.createElement('a')
a.href = 'other.html'
a.innerHTML = 'to other'

header.appendChild(a)

document.body.appendChild(header)