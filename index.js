const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();
// enable body parser
app.use(express.json());
// enable cors
app.use(express.urlencoded({ extended: false }));
// enable static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/openai", require("./routes/openairoute"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
