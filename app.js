const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  fetch("https://dosant.github.io/video.mp4")
    .then((r) => r.body)
    .then((s) => s.pipe(res).type("mp4"))
    .catch((e) => {
      res.status(500).send("Error.");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
