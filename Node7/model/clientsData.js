const mongoose=require('mongoose');
module.exports =
    mongoose => {
const ClientsSchema = new mongoose.Schema({ id: String, name: String, 
  status:String,password:String
   
 });
const clients = mongoose.model('clients', ClientsSchema);

return clients;
    };
    