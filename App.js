const express = require('express')
const app = express()
const port = 3000
const web =require('./Routes/web')
const connectDb =require('./db/connectDb')

//routeing
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/about', (req, res) => {
//     res.send('He')
// })

//html css set
app.set('view engine','ejs')

//css image link
app.use(express.static('public'))

connectDb()

app.use(express.urlencoded({ extended:true}));

// routeing
app.use('/',web)

app.listen(port, () => {
    console.log(`Server start localhost :${port} `)
})
 
