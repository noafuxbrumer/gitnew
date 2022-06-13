const mongoose=require('mongoose');
module.exports =
    mongoose => {
const DishesSchema = new mongoose.Schema({ code: String, name: String, 
    currency:{type:String ,enum:['$','ILS']},
    price :Number
 });
const dishes = mongoose.model('dishes', DishesSchema);

return dishes;
    };