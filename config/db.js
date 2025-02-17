import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("MongoDb is connected successfully");
  });
};

export default connectDb;
