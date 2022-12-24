const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASS, MONGO_DB } = process.env;

let db;
const connectMongoose = async () => {
  mongoose.connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.bfbrp.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
  return db;
};

module.exports = {
  connectMongoose,
  db,
};
