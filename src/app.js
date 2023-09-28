const express = require("express");
const path = require("path")
require("./db/conn");
const app = express();

const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path))
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello from the expres");
});

app.listen(port, (req, res) => {
  console.log(`Server created successfully at ${port}`);
});
