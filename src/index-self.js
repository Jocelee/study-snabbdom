import { init, classModule, styleModule, propsModule, eventListenersModule } from 'snabbdom'
import h from '../mysnabbdom/h'

const patch = init([classModule,propsModule,styleModule,eventListenersModule])
let vmodel = h('div', {}, [
    h('p', {}, '哈哈'),
    h('p', {}, '嘻嘻'),
    h('p', {}, [h('span',{}, '呵呵')]),
    h('p', {}, h('span',{}, '啊啊'))

])
console.log("🚀 ~ file: index.js ~ line 26 ~ vmodel", vmodel)
const container = document.getElementById('container')
patch(container, vmodel)