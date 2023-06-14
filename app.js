const PORT = 8000;
const express = require("express");
const data = require("./data");

const app = express();
app.get("/api/products", (req, res) => {
  return res.json({ data: data });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
