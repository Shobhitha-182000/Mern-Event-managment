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
    
    const imagesPath = path.join(__dirname, '..', '..', 'Frontend', 'frontend', 'public');
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
  const { title, description, location, date} = req.body;
  const imageDetails = req.file.filename;

 
  const formattedDate = formatDate(date);

  try {
    const newEvent = await Event.create({
      title,
      description,
      location,
      date: formattedDate,
      image: imageDetails,
    });
    res.status(200).json({ data: newEvent, message: "Event created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

 
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
}

 
function parseDate(dateString) {
  const [day, month, year] = dateString.split("-");
  return new Date(year, month - 1, day);  
}

router.delete('/event/:id', adminController.deleteEvents);
router.put('/event/:id',upload.single("image"), adminController.updateEvent);
router.get('/event/:id', adminController.getEventById);

module.exports = router;
