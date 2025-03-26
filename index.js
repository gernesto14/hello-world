import "dotenv/config";

import express from "express";
const app = express();
const PORT = process.env.PORT || 3000; // Use the assigned port

app.get("/", (req, res) => {
  res.send("Hello World! " + `${process.env.TEXT}`);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on port ${PORT}`);
});
