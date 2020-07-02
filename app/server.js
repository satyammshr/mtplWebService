const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const user = require("./routes/userRoutes/userRoutes");
const provinces = require("./routes/provincesRoutes/provinceRoute");
const mtpl = require("./routes/mtplRoutes/mtplRoutes");
const setup = require("./routes/setupRoutes/setupDbroutes");

// var corsOptions = {
//   origin: "http://localhost:3001"
// };

var corsOptions = {
  origin: [
    "*",
    "http://13.127.38.123",
    "http://localhost:3000",
    "http://localhost:3001",
  ],
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", user);
app.use("/provinces", provinces);
app.use("/mtpl", mtpl);
app.use("/setupDb", setup);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Infy Insurance Backend application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
