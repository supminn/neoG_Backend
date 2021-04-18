const dbURI = process.env.DB_URI;
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const response = await mongoose.connect("mongodb+srv://supminn:db4n3O!p@sup-cluster.fu7o7.mongodb.net/inventory?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (err) {
    console.error("Mongoose connection failed", err);
  }
};

module.exports = connectToDatabase;