import express from "express";
const app = express();
const port = process.env.port;

app.listen(port, () => {
  console.log(`listen port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello, world!!!!");
});


(() => {
    console.log("Hello, World!");
})();
