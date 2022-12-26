console.log("NODE_ENV: ", process.env.NODE_ENV);
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const { connectMongoose } = require("./config/database");

const verifyApiKey = require("./middlewares/verifyApiKey");
const errorHandler = require("./middlewares/errorHandler");

connectMongoose();

const app = express();

// Enable various security middlewares
app.use(helmet());
app.use(cors());

// Use morgan for request logging
app.use(morgan("combined"));

// Parse request bodies as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Define your routes here
app.use("/auth", require("./routes/Auth"));
app.use("/api", verifyApiKey, require("./routes/Api"));
app.use("/api/store", require("./routes/Store"));

app.use("/private", require("./routes/Private"));

// Error handler
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
