const express = require("express")
const app = express()

const userRoutes=require("./routes/users")

app.set("view engine", "ejs")

//Dosya kullanımı
app.use(express.static('public'))
app.use(express.static('node_modules'))

// Sitemizin port adresi 
app.use(userRoutes);

app.listen(3002, () => {
    console.log("3000 port listen")
})