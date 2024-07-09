const Event = require("../Models/EventAdminModel");
const fs = require("fs");

exports.getEvents = async (req, res) => {
  try {
    const newEvent = await Event.find();
    res.status(200).json({ data: newEvent, message: "Successfully Found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
 

 
 

// app.post("/upload-image", upload.single("image"), async (req, res) => {
//   const { title, description, location, date, price } = req.body;
//   const imageDetails = req.file.filename;
//   console.log(imageDetails);
//   try {
//     await Image.create({
//       image: imageDetails,
//     });
//     res.json({ status: "ok" });
//   } catch (error) {
//     res.json({ status: "not-ok" });
//   }
// });

// exports.addEvents = async (req, res) => {
//   try {
//     const { title, description, location, date, price } = req.body;

//     if (!req.file) {
//       return res.status(400).json({ message: "Image file is required" });
//     }

//     const dateParsed = new Date(date);

//     if (isNaN(dateParsed.getTime())) {
//       return res.status(400).json({ message: "Invalid Date" });
//     }

//     const newEvent = await Event.create({
//       title,
//       description,
//       location,
//       date: dateParsed,
//       price,
//       image: {
//         data: fs.readFileSync("public/Images/" + req.file.filename),
//         contentType: "image/png", // Adjust accordingly based on file type
//       },
//     });

//     res.status(200).json({ data: newEvent, message: "Successfully created" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

exports.deleteEvents = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findByIdAndDelete(eventId);
    if (!event) {
      return res.status(500).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
 
function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
}

 
function parseDate(dateString) {
  const [day, month, year] = dateString.split("-");
  return new Date(year, month - 1, day);  
}

exports.updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const { title, description, location, date } = req.body;
  const imageDetails = req.file ? req.file.filename : undefined;
  const formattedDate = formatDate(date);

  try {
    const eventToUpdate = await Event.findById(eventId);
    if (!eventToUpdate) {
      return res.status(404).json({ message: "Event not found" });
    }

 
    eventToUpdate.title = title;
    eventToUpdate.description = description;
    eventToUpdate.location = location;
    eventToUpdate.date = formattedDate; 
   
 
    if (imageDetails) {
      eventToUpdate.image = imageDetails;
    }

   
    const updatedEvent = await eventToUpdate.save();
    res.status(200).json({ data: updatedEvent, message: "Event updated successfully" });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ data: event });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
