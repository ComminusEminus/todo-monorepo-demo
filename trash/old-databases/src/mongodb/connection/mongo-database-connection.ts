import mongoose from 'mongoose';
import env from 'dotenv'

env.config({path: '../.env'})

mongoose.Promise = global.Promise;

export const mongoDatabaseConnection = async (): Promise<void> => {
  
  try{
    await mongoose.connect('mongodb+srv://MagnusMirza:FB5hAgn9fxKCoSWy@cluster0.uiq7w.mongodb.net/?retryWrites=true&w=majority');
    console.log("Successfully connected to mongodb")
  }catch(err){
    console.log(err)
  }
};
