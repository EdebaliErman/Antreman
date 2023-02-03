//Domlarımız...

const see = document.getElementById("see")
const show = document.getElementById("show")
const del = document.getElementById("delete")
//Push yapıcağımız diziler
const url = []
//Json bağladığımız yer 
dbLoad()
async function dbLoad() {
    const res = await fetch("userdata.json")
    let db = await res.json();
    db.forEach(e => {
        url.push(e.url)
    });
}

//tıkladığındaki eylemlerimiz 
show.onclick = function (e) {
    let sum = Math.floor(Math.random() * 11)
    let newCreate = document.createElement("div")
    newCreate.innerHTML = "<img class='see' src='" + url[sum] + "'> "
    if (see.innerHTML = !false) {
        see.innerHTML = ""
        see.append(newCreate)
    }
    
}

