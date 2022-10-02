import express from "express";

import main from "./conjunctionTLE.js"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/", async (req, res) => {
    try {
        
        res.json(await main())

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Internal server error."})
    }
})

app.listen(process.env.PORT || 9000, () => {
    console.log("Listening on port 9000")
})