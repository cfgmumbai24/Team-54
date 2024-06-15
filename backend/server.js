require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// routes
const donorRoutes = require("./routes/donor");
const NGORoutes = require("./routes/NGO")
const schoolRoutes = require("./routes/school.js");
const ngoRoutes = require("./routes/ngoschool.js");

const app = express();

app.use(express.json());


app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/donor", donorRoutes);
app.use("/api/NGO", NGORoutes)
app.use("/api/gets", schoolRoutes);
app.use("/api/getss", ngoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
