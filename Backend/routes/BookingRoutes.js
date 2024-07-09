const router=require('express').Router();
const BookingController=require('../Controller/BookingController')

router.post('/book',BookingController.SaveBooking)

module.exports=router;