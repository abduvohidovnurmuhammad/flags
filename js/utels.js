function $(name){
    return document.querySelector(name)
}



function $$(tagname,className,data){
    let element = document.createElement(tagname)
    element.className =className
    element.innerHTML = data
    return element
}
export default {$,$$}