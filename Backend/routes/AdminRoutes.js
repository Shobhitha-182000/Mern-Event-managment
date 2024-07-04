const express=require('express')
const router=express.Router();
const adminController=require('../Controller/AdminController')

router.get('/event',adminController.getEvents);
router.post('/save',adminController.addEvents);
router.delete('/event/:id',adminController.deleteEvents)
router.put('/event/:id',adminController.updateEvents)
router.get('/event/:id',adminController.getEventById)

module.exports=router;