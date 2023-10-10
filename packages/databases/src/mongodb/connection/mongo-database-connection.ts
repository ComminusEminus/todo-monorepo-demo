import mongoose from 'mongoose';
import env from 'dotenv'

env.config({path: '../../../../../.env'})

mongoose.Promise = global.Promise;

export const mongoDatabaseConnection = async (): Promise<void> => {
  
  try{
    if(process.env.MONGODB_URI){
      
      await mongoose.connect(process.env.MONGODB_URI);
      
      console.log("Successfully connected to mongodb")
    }else{
      
      throw new Error('mongodb uri cannot be found')
    
    }
    
  }catch(err){
    console.log(err)
  }
};
