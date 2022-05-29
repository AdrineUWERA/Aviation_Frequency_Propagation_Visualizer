import connectDB from "./data/db_connect.js";
import express from "express";
import dotenv from "dotenv";
import router from "./routes/receiverRoutes.js";
import cors from "cors" 

dotenv.config();

const app = express();

//connect to the mongodb
connectDB;

app.use(cors());

// Body parser
app.use(express.json());

// access the routes
app.use(router);


const port = process.env.PORT || 3000;

// listens to the server and the port it is running on
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});