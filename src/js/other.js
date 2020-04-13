/*
 * @Description: 
 * @Author: linqibin
 * @Date: 2020-04-13 09:53:38
 * @LastEditTime: 2020-04-13 17:40:24
 * @LastEditors: linqibin
 */
import '../css/other.less'
import '../css/other.sass'
import '../css/other.scss'
import '../static/iconfont/iconfont.css'

import es6 from './es6'

const hearder = document.createElement('h2')
hearder.innerHTML = 'others'

const icon = document.createElement('i')
icon.classList.add('iconfont', 'iconwind-smile')

hearder.appendChild(icon)

es6.fn()

console.log(_)
console.log(NODE_ENV)

axios.post('/api/clife-estate-api-web-admin/estate/project/queryProject.do', { data: { project: { projStatus: 1 } } })

const a = document.createElement('a')
a.href = '../index.html'
a.innerHTML = 'to index'

hearder.appendChild(a)

document.body.appendChild(hearder)