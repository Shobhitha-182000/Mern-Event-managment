const Book=require('../Models/Booking');
// const User=require('../Controller/')

exports.SaveBooking=async(req,res)=>{
   try{
    const {date}=req.body;
    console.log('...........................'+date)
    // const dateParsed=new Date({date});
    // console.log('date parsed '+dateParsed)
    const bookings=await Book.create(
       {date}
    )
    console.log('bookings '+bookings)
    res.status(200).json({data:bookings,message:'Booked Successfully'})
   }catch(error){
    res.status(500).json({message:'Internal server error'})
   }
}