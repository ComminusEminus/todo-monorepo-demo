import mongoose from 'mongoose';

/*DB_PASS = “FB5hAgn9fxKCoSWy”*/


mongoose.Promise = global.Promise;

export const dbConn = async (): Promise<void> => {
  try{
    await mongoose.connect(`mongodb+srv://MagnusMirza:FB5hAgn9fxKCoSWy@cluster0.uiq7w.mongodb.net/?retryWrites=true&w=majority`);
    console.log("successfully connected to mongodb")
  }catch(err){
    console.log(err)
  }
  
};
