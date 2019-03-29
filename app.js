const express = require("express");
const app = express();
const api_helper = require("./API");
const port = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");
const user = "NathanKeyzer";
const key = "558413ce30002869acf1d2e2d9c2047b";

const axios = require("axios");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${user}&api_key=${key}&format=json`;
const recentsong = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=${key}&format=json&page=1`;
const artistinfo = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Drake&api_key=${key}&format=json`;

app.use((req, res, next) => {
  // todo: set cache header to 1 year
  res.setHeader("Cache-Control", "max-age=" + 365 * 24 * 60 * 60);
  next();
});
//set cache control, compress,
app.use(express.static("public"));
app.use(
  session({
    store: new FileStore(path),
    secret: "keyboard cat"
  })
);

app.set("view engine", "ejs");
app.set("views", "views");

//homepage van de applicatie
app.get("/", async function(req, res) {
  let tracks = await axios.get(url);

  console.log(tracks.data);

  res.render("index.ejs", {
    tracks: tracks.data.toptracks.track,
    user: user,
    artist: tracks.data.toptracks.track[0].artist
  });
});
app.get("/recent", async function(req, res) {
  let nowplaying = await axios.get(recentsong);
  console.log(nowplaying.data);

  res.render("recent.ejs", {
    tracks: nowplaying.data.recenttracks.track,
    user: nowplaying.data.recenttracks["@attr"].user
  });
});
app.get("/offline", function(req, res) {
  res.render("offline", {
    user: user
  });
});
//toptracks pagina
app.get("/toptracks", function(req, res) {
  res.render("toptracks.ejs");
});
//data overzicht van json file
app.get("/data", (req, res) => {
  api_helper
    .topTracks(
      "https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json"
    )
    .then(response => {
      res.render("songs", { items: response });
      res.json(response);
    })
    .catch(error => {
      res.render(error);
    });
});
// dit is de detail pagina
app.get("/artist/:artist", async function(req, res) {
  let artist = await axios.get(artistinfo);
  console.log(artist.data);

  res.render("detail.ejs", {
    artist: artist.data.artist,
    user: user,
    tags: artist.data.artist.tags.tag[0].name,
    similar: artist.data.artist.similar.artist[0].name
  });
});

app.get("/test", function(req, res) {
  res.render("index");
});
//app luisterd naar de port

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
