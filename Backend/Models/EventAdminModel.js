const mongoose=require('mongoose')
const { type } = require('os')

const eventAdminSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            Required:[true,'Title is required']
        },
        description:{
            type:String,
            Required:[true,'Description is required']
        },
        location:{
            type:String,
            Required:[true,'Description is required']
        },
        date:{
            type:Date,
            Required:true
        },
        price:{
            type:Number 
        },
        image: {
            data: Buffer,
            contentType: String,
          },
        
    },{timestamps:true}
)

const EventAdmin=mongoose.model('eventadmin',eventAdminSchema);

module.exports=EventAdmin;