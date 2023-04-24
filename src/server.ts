import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello from node js api server"));

app.listen(5000, () => console.log(`Server is running`));
