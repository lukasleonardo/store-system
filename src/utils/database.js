import mongoose from 'mongoose'

let isConnected = false;

export const connectToDb = async ()=>{
  mongoose.set('strictQuery', true)
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);
  if(isConnected){
    return 'Mongoose already connected!'
  }

  try{
    await mongoose.connect(process.env.MONGO_URI, {
      dbName:"store-system",
    })
    isConnected=true
    console.log('MongoDb is Connected!')
  }catch(e){
    console.log(e)
  }
}