const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/architectual", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true);

module.exports = mongoose.connection;