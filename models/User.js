// Import the Mongoose library, which is used for MongoDB interactions.
const mongoose = require('mongoose'); 
// Create a new Schema object using Mongoose.
const Schema = mongoose.Schema ; 

const userSchema = new Schema ({
    fullName : String,
    email: String, 
    phone : String, 
}) ; 

// Create a Mongoose model named 'User' based on the 'userSchema' schema
const User = mongoose.model('User', userSchema);
// Export the 'User' model to make it available for use in other parts of the application.
module.exports = User;