import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce-web.ei7ov4o.mongodb.net/FLIPKART-CLONE?retryWrites=true&w=majority&appName=ecommerce-web`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true, // use new server directory and monitoring engine of mongoDB
      useNewUrlParser: true, // new url
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
