const express=require('express')
const router=express.Router()

//Bring the item model to make query
const Item=require('../../models/Items')//.. means outside of this file  two files
//@route GET api/items
//@desc Get ALL items
//access public 
router.get('/', (req, res) =>
{
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items))
})
//we are already in the route "/api/items" so write just /
//1-take the model Item
//2-use find method which returns promise
//3-.then will giv use the items its json api so response..
//4-sort with mongoose sort by the date descending *-1*
//5- test it using postman




//@route POST api/items
//@desc creat a POST
//access public normally its private when i have authentication
router.post('/', (req, res) =>
{
const newItem= new Item({
name:req.body.name
})
newItem.save().then(item=>res.json(item))

})
//1- construct an object to insert into DB
//2- passing in an object in new Item
//3-name is coming from the request in the body
//body parser allows to do this
//4-save the variable cause its just created in memory 
//5-then give us back the item is saving and spitout the item in json



//@route delete api/items/:id >> delete needs an id
//@desc delete
//access public normally its private when i have authentication
router.delete('/:id', (req, res) =>
{
item.findById(req.params.id)
.then(item=> item.remove().then(()=> res.json({success: true})))
.catch(err =>res.status(404).json({success:false}))   
})
//1-first find it
//2-to get from paramter by using req.params.id cause it going to be in the url
//3- in case the item does not exsit use catch
//pass in an err and send back res 
//status(404)



// export default router 
module.exports=router
//export it so ohter files can read this^^