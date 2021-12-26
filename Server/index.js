import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import Route from './route/route.js';
import cors from 'cors';
const app = express();


const MONGOOSE_CONNECTION = "mongodb+srv://ziakhan:1806477Zk@cluster0.myhyg.mongodb.net/social(Memories)?retryWrites=true&w=majority";
mongoose.connect(MONGOOSE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Your DataBase Is is SuccessFully Created!"))
    .catch((error) => console.log(error.message))



const PORT = process.env.PORT || 5000;



app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use("/", Route);
app.listen(PORT, () => console.log(`The Server is Running On this Port ${PORT}`));