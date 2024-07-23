const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./Models/UserModel");
const eventAdmin = require("./Models/EventAdminModel");
const connectDB = require("./utils/db.js");
const dotenv = require("dotenv");
const userRoutes = require("./routes/UserRoutes.js");
const authRoutes = require("./routes/auth.js");
const adminRoutes = require("./routes/AdminRoutes.js");
const cors = require("cors");
const Image = require("./Models/Image.js");
const multer = require("multer");
const path = require("path");
const Book=require('./Models/Booking.js')
const BookingRoutes=require('./routes/BookingRoutes.js')
const GeminiApiRoutes=require('./routes/GeminiApiRoutes.js')
//middlewares
app.use(express.json());
app.use(cors());

connectDB();
require('./utils/GeminiApi.js')
 
 
app.use(userRoutes);
app.use("/admin", adminRoutes);
app.use(BookingRoutes)
app.use('/api/chat',GeminiApiRoutes)
//  app.use('/api/auth',authRoutes);

const port = process.env.PORT;

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running...${port}`);
});
