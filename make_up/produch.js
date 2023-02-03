const producths = document.getElementById("producths");

const url = []
const nameitem = []

producthData()
async function producthData() {
    const res = await fetch("produch.json")
    let data = await res.json();
    data.forEach(item => {
        url.push(item.url)
        nameitem.push(item.name)
    });
    for (let i = 0; i < data.length; i++) {
        let newProducth = document.createElement("div")

        newProducth.innerHTML = "<img src='" + url[i] + "'/> <h4>" + nameitem[i] + "</h4><input type='submit'/> "

        producths.append(newProducth)
    }


}

