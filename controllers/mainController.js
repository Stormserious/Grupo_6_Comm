const path = require("path")


const mainController = {
    renderHome :(req, res) => {
        res.render("home")
    },
    renderLogin: (req,res)=>{
        res.render("login")
    },
    renderRegister: (req,res)=>{
        res.render("register")
    },
    renderDetalle : (req,res)=>{
        res.render("productDetail")
    }
}
    
module.exports = mainController