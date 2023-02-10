const express = require("express");
const router = express.Router();
const db = require("../data/db");


router.use("/products/:id", async function (req, res) {
    try {
        const [products] = await db.execute("select * from products where id=" + req.params.id)

        res.render("products-details", {
            products: products[0]
        })
    } catch (err) {
        console.log(err)
    }
})
router.use("/products", async function (req, res) {
    try {
        const [products] = await db.execute("select * from products ")

        res.render("products", {
            products: products
        })
    } catch (err) {
        console.log(err)
    }
})
router.use("/", async function (req, res) {
    try {
        const [products] = await db.execute("select * from products")

        res.render("index", {
            products: products
        })
    } catch (err) {
        console.log(err)
    }
})
router.use("/products", async function (req, res) {
    try {
        const [products] = await db.execute("select * from products ")

        res.render("products_menu", {
            products: products
        })
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;