const express = require("express");
const router = express.Router();
const adminController = require('../Controller/AdminController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Event = require("../Models/EventAdminModel");

 
//to store image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    
    const imagesPath = path.join(__dirname, '..', '..', 'Frontend', 'frontend', 'src', 'images');
    cb(null, imagesPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

 

 

// Routes
router.get('/event', adminController.getEvents);
router.post("/save", upload.single("image"), async (req, res) => {
  const { title, description, location, date, price } = req.body;
  const imageDetails = req.file.filename;

  try {
    const newEvent = await Event.create({
      title,
      description,
      location,
      date: new Date(date),
      price,
      image: imageDetails,
    });
    res.status(200).json({ data: newEvent, message: "Event created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.delete('/event/:id', adminController.deleteEvents);
router.put('/event/:id',upload.single("image"), adminController.updateEvent);
router.get('/event/:id', adminController.getEventById);

module.exports = router;
