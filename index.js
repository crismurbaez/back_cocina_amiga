import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send(`Welcome to the back for Cocina Amiga`);
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});