// alert('index.js')
import { h, init, classModule, styleModule, propsModule, eventListenersModule } from 'snabbdom'

const patch = init([classModule,propsModule,styleModule,eventListenersModule])

// èæèç¹
// let myVModel = h('a', { props: { href: 'http://www.baidu.com', target: '_blank'  }}, 'link')
// console.log("ð ~ file: index.js ~ line 5 ~ myVModel", myVModel)
// let myVModel1 = h('ul', [
//     h('li', {}, 'è¹æ'),
//     h('li', 'è¥¿ç'),
//     h('li', [
//         h('p', 'åå'),
//         h('p', 'å»å»'),
//     ])

// ])
// console.log("ð ~ file: index.js ~ line 18 ~ myVModel1", myVModel1)
// ä¸æ 
// const container = document.getElementById('container')
// patch(container, myVModel1)

const container = document.getElementById('container')
const btn = document.getElementById('btn')
// keyçä½ç¨ï¼ç¨äºæ è®°å¯ä¸èç¹ï¼diffæ¯è¾çæ¶åéè¿keyåéæ©å¨æ¥å¤æ­æ¯å¦ç»ä¸èç¹
const vnode1 = h('ul',{}, [
    h('li', {key:'a'}, 'a'),
    h('li', {key:'b'}, 'b'),
    h('li', {key:'c'}, 'c'),

])
patch(container, vnode1)

const vnode2 = h('ol',{}, [
    h('li', {key:'e'}, 'e'),
    h('li', {key:'a'}, 'a'),
    h('li', {key:'b'}, 'b'),
    h('li', {key:'c'}, 'c'),
    h('li', {key:'d'}, 'd'),
])
// ä¸æ 
btn.onclick = function () {
    patch(vnode1, vnode2)
}


