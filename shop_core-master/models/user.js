var mongoose=require('mongoose');

module.exports=mongoose.model('users',{
    firstName: String,
    lastName: String,
    email:String,
    password: String,
    orders: Array
});
