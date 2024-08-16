// api/index.js
const express = require("express");
const jsonServer = require("json-server");

const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", jsonServer.router("db.json"));

// Add additional routes for Express if needed
app.get("/", (req, res) => {
  res.send("Hello from Express server with json-server!");
});

// Export the handler to be used by Vercel
module.exports = app;
