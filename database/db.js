import mongoose from "mongoose";

const dbConnection = async () => {
  const DB_URI =
    "mongodb+srv://jagdishkumawat81:againtry@job-portal.0hlwzbg.mongodb.net/";

  try {
    await mongoose.connect(DB_URI, { useUnifiedTopology: true });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default dbConnection;
