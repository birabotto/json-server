// api/index.js
// const express = require("express");
// const jsonServer = require("json-server");

// const fs = require("fs");

// const app = express();
// const port = 3000process.env.PORT || ;

// app.use("/api", jsonServer.router("db.json"));

// // Add additional routes for Express if needed
// app.get("/", (req, res) => {
//   res.send("Hello from Express server with json-server!");
// });

// app.listen(port);

// // Export the handler to be used by Vercel
// module.exports = app;

const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
// const middlewares = jsonServer.defaults({
//   static: undefined,
// });

// server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);

server.listen(PORT, () => {
  console.log("JSON Server is running");
});
