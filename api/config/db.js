import mongoose from "mongoose";

// create a mongoDB connection
const mongoDBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connected successfully`.bgBlue.white);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

//export
export default mongoDBConnect;
