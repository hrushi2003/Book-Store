import express from "express";
import { PORT,connect } from "./config.js";
import { Book } from "./models/bookmodels.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors";//cross-origin resource sharing

const app = express();

app.use(express.json());
//allows custom origins
app.use(cors());

app.get('/',(req,res) => {
    console.log(req);
    connect();
    res.status(234).send("THIS IS THE BOOK STORE");

});

app.use('/books',bookRoutes);


app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})