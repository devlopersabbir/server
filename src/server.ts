import express from "express";
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      messag: "Hello Docker",
      author: "Sabbir Hossain",
      channel: "ST Sabbir",
    });
});

app.listen(5000, () => console.log(`Server is running`));
