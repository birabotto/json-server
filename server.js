// server.js
const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const app = express();
const port = 3000;

// Set up json-server to use a custom db.json file
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Use json-server middlewares
app.use(middlewares);
app.use("/api", router);

// Add additional routes for Express if needed
app.get("/", (req, res) => {
  res.send("Hello from Express server with json-server!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
