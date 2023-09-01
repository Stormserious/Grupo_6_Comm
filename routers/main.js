const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
router.get("/",mainController.renderHome)
router.get("/login",mainController.renderLogin)
router.get("/register",mainController.renderRegister)
router.get("/detalle",mainController.renderDetalle)

module.exports = router