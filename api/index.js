import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {

res.json({
success: true,
message: "Instagram Downloader API Running"
});

});

app.get("/api/download", async (req, res) => {

try {

```
const url = req.query.url;

if (!url) {

  return res.status(400).json({
    success: false,
    message: "No URL provided"
  });

}

return res.json({

  success: true,

  title: "Instagram Reel",

  thumbnail:
  "https://via.placeholder.com/400x600.png?text=Instagram+Reel",

  download_url:
  "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"

});
```

} catch (error) {

```
return res.status(500).json({
  success: false,
  message: "Internal server error"
});
```

}

});

export default app;
