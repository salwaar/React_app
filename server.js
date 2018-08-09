const express =require ('express')
const mongoose =require ('mongoose')
const bodyParser =require ('body-parser')
const items =require('./routes/api/items')//##
const app= express()
const path = require('path') // core nodejs module no need for npm i .. 
//bodyparser middleware
app.use(bodyParser.json())


//DB config "bring the config file "keys" in"
const db =require ('./config/keys').mongoURI

//connecting to mongo
mongoose.connect(db) //passing in the db object and this is promis based=add .then .catch
.then(() => console.log('mongodb connected'))  // call back here as an arrow function
.catch(err=>console.log(err))
//use routes "anything gose to '/api/items should refere to items variable which is thr file ##"
app.use('/api/items', items)
//serve static assets if in prudection 
if(process.env.NODE_ENV === 'production'){
  //set statci folder
  
  app.use(expredd.static('client/build'))
  app.get('*', (req,res )=>{
res.sendFile(path.resolve(__dirname, 'client' ,'build', 'index.html'))
  })
} 
//to run my server = creat a variable for the port im going to use

const port = process.env.PORT || 5000 //cause i’ll deploy it to herku this is necessary
app.listen(port , ()=> console.log(`Server started on port  ${port}`))

