import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(cookieParser());

// Set cookie
app.get("/set-cookie", (req, res) => {
    // Write cookie
    res.cookie("luckyNum", Math.random());
    res.cookie("pet", "Veera");
    res.send("Check your cookie.");
});

app.use((req, res) => {
    // Read cookies
    console.log({
        cookies: req.cookies,
    });
    res.send("Check your log");
});

app.listen(3000, () => console.log("Served @ 3000"));
