const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Bring in express routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Setup connection to MongoDB database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start Express Server
app.listen(PORT, () => {
  console.log(`Now listening on: http://localhost:${PORT}`);
});
