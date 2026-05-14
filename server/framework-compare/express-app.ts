import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ msg: "Please send me your name!" });
  }
  res.json({ msg: `Hello ${name}` });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
