import mongoose from "mongoose";
import { food_list } from "../frontend/src/assets/foodAssets.js";
import foodModel from "./models/foodModel.js";

const seedFoods = async () => {
  try {
  
       await mongoose.connect('mongodb+srv://766hariwork:Hari05052003@cluster0.7oskezr.mongodb.net/ffood-del').then(()=>console.log("DB connected"));
   
   
   
    await foodModel.deleteMany();

    const formattedFood = food_list.map(food => ({
      name: food.name,
      description: food.description,
      price: food.price,
      category: food.category,
      image: food.image  
    }));

    await foodModel.insertMany(formattedFood);
    console.log("Food seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding food:", err);
    mongoose.connection.close();
  }
};

seedFoods();