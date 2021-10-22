// routerLoading.js

function show() {
    let div = document.createElement('div')
    div.id = 'routerLoading'
    document.body.appendChild(div)
}

function hide() {
    let dom = document.getElementById('routerLoading')
    if (dom) dom.remove()
}

export default {
    show,
    hide
}