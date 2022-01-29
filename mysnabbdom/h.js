import vnode from "./vnode";

// h('div', {}, '文字')
// h('div', {}, [h(),h()])
// h('div', {}, h())

export default function(sel, data, c){
    // console.log("🚀 ~ file: h.js ~ line 10 ~ function ~ arguments", arguments)

    // 检查参数的个数
    if(arguments.length != 3){
        throw new Error('对不起，h函数必须传入3个参数，我们是低配版h函数')
    }
    // h('div', {}, '文字') || h('div', {}, 111)
    if(typeof c === 'string' || typeof c == 'number'){
        return vnode(sel, data, undefined, c, undefined)
    }else if(Array.isArray(c)){
        // h('div', {}, [h(),h()]),主要作用为收集children并返回
        let children = []
        for(let i = 0; i < c.length; i++){
            // 检查c的item必须得是一个对象
            if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))){
                throw new Error('传入的第3个参数中有项不为h参数')
            }
            children.push(c[i])
        }
        return vnode(sel, data, children, undefined, undefined)
    }else if(typeof c == 'object' && c.hasOwnProperty('sel')){
        // h('div', {}, h())
        let children = [c]
        return vnode(sel, data, children, undefined, undefined)

    }else{
        throw new Error('传入的第3个参数不对')
    }
}