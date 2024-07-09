const mongoose=require('mongoose')

const BookingSchema=new mongoose.Schema({
    date:{
        type:Date,
        Required:true
    }
},{timestamps:true})

const BookingModel=mongoose.model('Bookings',BookingSchema);
module.exports=BookingModel;