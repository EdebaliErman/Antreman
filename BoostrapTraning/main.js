let http = require("http");
let server = http.createServer((req, res) => {
    if (res, url == "/") {
        res.write("<h1>main page</h1>")

    }
    else if (req, url == "/producth") {
        res.write("<h1>ürünler</h1>")
    }
    else {
        res.write("sayfa bulunamadı")
    }
    res.end()
})
server.listen(3000, () => {
    console.log("node.js server at port 3000");
})