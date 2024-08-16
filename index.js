// api/index.js
const express = require("express");
const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

// Set up json-server to use a custom db.json file
const router = jsonServer.router({
  ...JSON.parse(fs.readFileSync(path.join(__dirname, "../db.json"))),
});
const middlewares = jsonServer.defaults();

// Use json-server middlewares
app.use(middlewares);
app.use("/", router);

// Add additional routes for Express if needed
app.get("/", (req, res) => {
  res.send("Hello from Express server with json-server!");
});

// Export the handler to be used by Vercel
module.exports = app;
