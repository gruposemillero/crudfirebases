const express = require("express");
const morgan = require("morgan");
const { db } = require("./firebase");
const app = express();

app.use(morgan("dev"));

app.get("/", async (req, res) => {
  const querysnapshot = await db.collection("contactos").get();
  console.log(querysnapshot.docs[0].data());
  res.send(querysnapshot.docs[0].data());
});
module.exports = app;
