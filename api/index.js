import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
res.send("API Running");
});

app.get("/api/download", (req, res) => {

res.json({
success: true,
title: "Instagram Reel",
thumbnail:
"https://via.placeholder.com/400x600.png",
download_url:
"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
});

});

export default app;
