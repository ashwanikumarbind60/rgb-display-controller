const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Nova Backend Running");
});

app.get("/download", async (req, res) => {

  const url = req.query.url;

  if (!url) {
    return res.json({
      success: false,
      message: "No URL"
    });
  }

  try {

    const api =
      `https://instagram-scraper-api2.p.rapidapi.com/v1/post_info?code_or_id_or_url=${encodeURIComponent(url)}`;

    const response = await axios.get(api, {
      headers: {
        "X-RapidAPI-Key": "PASTE_YOUR_RAPIDAPI_KEY",
        "X-RapidAPI-Host":
          "instagram-scraper-api2.p.rapidapi.com"
      }
    });

    const data = response.data.data;

    res.json({
      success: true,

      title:
        data.caption?.text ||
        "Instagram Reel",

      thumbnail:
        data.thumbnail_url,

      video:
        data.video_url,

      audio:
        data.video_url
    });

  } catch (error) {

    console.log(error.message);

    res.json({
      success: false,
      message: "Server Error"
    });

  }

});

const PORT =
process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Running");
});