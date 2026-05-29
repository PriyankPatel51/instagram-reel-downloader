import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
res.send("Instagram Downloader API Running");
});

app.get("/api/download", async (req, res) => {

try {

```
const url = req.query.url;

if (!url) {
  return res.status(400).json({
    success: false,
    message: "Instagram URL required"
  });
}

// Demo response
// Replace with real scraper/API later

res.json({
  success: true,
  thumbnail:
    "https://via.placeholder.com/400x600.png?text=Instagram+Reel",

  title: "Instagram Reel",

  download_url:
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
});
```

} catch (error) {

```
res.status(500).json({
  success: false,
  message: "Server error"
});
```

}

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server running");
});

