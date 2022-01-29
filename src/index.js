// alert('index.js')
import { h, init, classModule, styleModule, propsModule, eventListenersModule } from 'snabbdom'

const patch = init([classModule,propsModule,styleModule,eventListenersModule])

// 虚拟节点
// let myVModel = h('a', { props: { href: 'http://www.baidu.com', target: '_blank'  }}, 'link')
// console.log("🚀 ~ file: index.js ~ line 5 ~ myVModel", myVModel)
// let myVModel1 = h('ul', [
//     h('li', {}, '苹果'),
//     h('li', '西瓜'),
//     h('li', [
//         h('p', '哈哈'),
//         h('p', '嘻嘻'),
//     ])

// ])
// console.log("🚀 ~ file: index.js ~ line 18 ~ myVModel1", myVModel1)
// 上树
// const container = document.getElementById('container')
// patch(container, myVModel1)

const container = document.getElementById('container')
const btn = document.getElementById('btn')
// key的作用：用于标记唯一节点，diff比较的时候通过key和选择器来判断是否统一节点
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
// 上树
btn.onclick = function () {
    patch(vnode1, vnode2)
}


