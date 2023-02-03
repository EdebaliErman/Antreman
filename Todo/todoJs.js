const text = document.getElementById("text");
const add = document.getElementById("add");
const see = document.getElementById("see");


add.onclick = function () {
    let textAdd = document.createElement("div")
    textAdd.innerHTML = "<div class='see'>" + text.value +"</div>"
    see.append(textAdd)
}

const del = document.getElementById("delete")
del.onclick=function () {
    see.remove()
}
