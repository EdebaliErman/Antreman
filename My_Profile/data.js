


const searchList = document.getElementById("searchList")
const list = document.getElementById("list")
const sonuc = document.getElementById("sonuc")

const nameKey = []
const username = []
const email = []

//Json veriyi getirip ulaşma
dataLoad()
async function dataLoad() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    let data = await res.json();
    data.forEach(element => {
        nameKey.push(element.name)
        username.push(element.username)
        email.push(element.email)
    });


    const wordset = [...new Set(email)]
    console.log(wordset)
    let sayac = 0;
    wordset.sort(() => Math.random() - 0.2)
    wordset.forEach(item => {
        if (sayac < 3) {
            const newWordSet = document.createElement("option")
            list.appendChild(newWordSet)
            newWordSet.value = item
        }
        sayac++


    })



}

searchList.addEventListener("input", (e) => doFilter(e.target.value));
function doFilter(searchWorld) {
    sonuc.innerHTML = ""
    const searchKriters = new RegExp(searchWorld, "gi")
    let seeList = email.filter(s => searchKriters.test(s))

    if (searchWorld.lenght >3) {
        seeList = [];
    }

    seeList.forEach(wife => {
        const letsSet = document.createElement("li")
        sonuc.appendChild(letsSet)
        letsSet.innerHTML = wife
    })

}