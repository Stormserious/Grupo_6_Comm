const path = require("path")


const mainController = {
    renderHome :(req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/home.html'))
    },
    renderLogin: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/login.html'))
    },
    renderRegister: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    }
}
    
module.exports = mainController