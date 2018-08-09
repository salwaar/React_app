const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//creat schema set it to new schema object which takes object
const ItemSchema = new Schema ({
name:{
    type:String ,
    required:true
}
, date:{
    type:Date,
    default:Date.now
}
})

//the whole model is exported now and to bring another file
module.exports=item = mongoose.model('item',ItemSchema)