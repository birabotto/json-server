const express = require("express");
const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");

// Create an Express app
const app = express();

// Use JSON Server middleware
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use("/api", router);

// Catch-all route for Vercel
app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
