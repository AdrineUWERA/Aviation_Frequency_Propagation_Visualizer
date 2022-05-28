import connectDB from "./data/db_connect.js";
import express from "express";
import dotenv from "dotenv";
import router from "./routes/receiverRoutes.js";

dotenv.config();

const app = express();

//connect to the mongodb
connectDB;

// Body parser
app.use(express.json());

// access the routes
app.use(router);

// app.get('/', function (req, res) {
//     res.send('we are home');
// });

const port = process.env.PORT;

// listens to the server and the port it is running on
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});