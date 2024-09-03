const express = require("express")
const FrontController =require ("../controllers/FrontController")
const AdminController = require("../controllers/admin/AdminController")
const route = express.Router()

route.get('/home',FrontController.home)
route.get('/about',FrontController.about)
route.get('/',FrontController.login)
route.get('/register',FrontController.register)
route.get('/contact',FrontController.contact)

route.get('/admin/dashboard',AdminController.dashboard)
route.get('/admin/studentDisplay',AdminController.display)
route.get('/admin/adduser',AdminController.adduser)

// insert data
route.post('/userInsert',FrontController.userInsert)

// route.get('/',(req,res) =>{
//     res.send('Hello World!')
// })
// route.get('/about',(req,res) =>{
//     res.send('about page')
// })

module.exports = route  