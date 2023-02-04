const express = require("express")
const app = express()

app.use(express.static('public'))


app.set("view engine", "ejs")
const data = [
    { id: 1, name: "iphone  1", price: 3000, isActive: true ,image:"1.jpg" }
    , { id: 2, name: "iphone 2", price: 4000, isActive: false  ,image:"5a3ef9b76d4002adf6864d63addcc392.jpg"}
    , { id: 3, name: "iphone 3", price: 5000, isActive: true ,image:"6f547db02564d0adeed45c6a1be2434a.jpg" }
    , { id: 4, name: "iphone 4", price: 6000, isActive: false  ,image:"f2bbeaee64cca1771f689d218daeb514.jpg"}
]
// rotus 

app.use("/products/:id", function (req, res) {
    const product = data.find(u => u.id == req.params.id)
    res.render("products-details",product)
})
app.use("/products", function (req, res) {
    res.render("products", {
        products: data
    })
})
app.use("/", function (req, res) {
    res.render("index")
})

app.listen(3000, () => {
    console.log("3000 port listen")
})