
// Import required dependencies and modules
const express = require('express');  // Import the Express.js framework
const connectDB = require('./config/connectDB');  // Import a function to connect to the database
const User = require('./models/User');  // Import the User model
require('dotenv').config({ path: './config/.env' });  // Load environment variables from a .env file

// Create an Express application
var app = express();


//parsing middleware 
app.use(express.json()); 


//etablish a database connection
connectDB(); 

//CRUD

//Add users
app.post('/add',async (req,res) => {
    const {fullName,email,phone} = req.body ; 
    try {
        const newUser = new User ({
            fullName,
            email, 
            phone  
        })
       await newUser.save (); 
       res.send('user successfully added'); // I can make any res i choose by my self.
        
    } catch (error) {
        console.log(error.message); 
        
    }
}); 

//get users 
app.get('/get', async(req,res)=>{
    const users = await User.find()
    res.send(users)
}); 

//get specific 
app.get('/get/:id', async(req,res)=>{
    const users = await User.findById(req.params.id); 
    res.send(users)
}); 

//uptate 
app.put('/update/:id',async(req,res)=>{
    try {
        const editeUser = await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editeUser)
        
    } catch (error) {
        console.log(error)
    }
    
}); 

//app.put('/update/:id', async (req, res) => {
    //try {
        //const updatedUser = await User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
        //res.send(updatedUser);
   // } catch (error) {
       // console.log(error);
       // res.status(500).json({ error: 'Internal server error' });
   // }
//});


//delete 
app.delete('/delete/:id', async (req,res) => {
    try {
    await User.findByIdAndDelete(req.params.id);
        res.send('User deleted'); 
        
    } catch (error) {
        console.log(error)
    }
}); 
//app.delete('/delete/:id', async (req, res) => {
  //  try {
    //    await User.findByIdAndDelete(req.params.id);
      //  res.send('User deleted');
    //} catch (error) {
      //  console.log(error);
        //res.status(500).json({ error: 'Internal server error' });
    //}
//});



var PORT = process.env.PORT || 4000 ; 

app.listen(PORT, err=>err?console.error(err): console.log(`server is running on port${PORT}`)); 