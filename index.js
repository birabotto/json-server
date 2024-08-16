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
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel!!!"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
