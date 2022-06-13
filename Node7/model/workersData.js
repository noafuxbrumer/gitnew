const mongoose=require('mongoose');
module.exports =
    mongoose => {
const WorkersSchema = new mongoose.Schema({ id: String, name: String,salary:Number,exitHour:Number,enterHour:Number 
   
 });
const workers = mongoose.model('workers', WorkersSchema);

return workers;
    };