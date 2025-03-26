import express from "express";
const app = express();
const PORT = process.env.PORT || 3000; // Use the assigned port

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on port ${PORT}`);
});
