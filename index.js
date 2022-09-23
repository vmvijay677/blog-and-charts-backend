import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import StudentRoute from "./Routes/StudentRoute.js";
import BlogRoute from "./Routes/BlogRoute.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Mongo is connected!");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use("/api/student", StudentRoute);

app.use("/api/blogs", BlogRoute);

app.listen(PORT, () => console.log(`Server connected in ${PORT}!`));