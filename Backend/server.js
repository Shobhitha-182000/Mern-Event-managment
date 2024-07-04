 const express=require('express')
 const app=express();
 const mongoose=require('mongoose')
 const User=require('./Models/UserModel')
 const eventAdmin=require('./Models/EventAdminModel')
 const connectDB=require('./utils/db.js')
 const dotenv=require('dotenv')
const userRoutes=require('./routes/UserRoutes.js')
const authRoutes=require('./routes/auth.js')
const adminRoutes=require('./routes/AdminRoutes.js')
const cors=require('cors')
 //middlewares
 app.use(express.json())
 app.use(cors())

 connectDB()

 app.use(userRoutes);
 app.use('/admin',adminRoutes)
//  app.use('/api/auth',authRoutes);

 const port=process.env.PORT
 
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running...${port}`)
     })
 
 