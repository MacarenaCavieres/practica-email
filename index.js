import "dotenv/config";

import express from "express";
import emailRouter from "./routes/email.route.js";

const app = express();

const __dirname = import.meta.dirname;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use("/", emailRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
