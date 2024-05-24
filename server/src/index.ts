import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-record"

import cors from "cors";


const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  "mongodb+srv://machireddyvishnu2:6zRtOIw5lPoyvOWS@cluster0.cqbra8r.mongodb.net/"
mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));


  app.use("/financial-records", financialRecordRouter);



app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});