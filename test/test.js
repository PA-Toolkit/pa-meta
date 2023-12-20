const fs = require("fs");
const { Metadata } = require("..");

const metadata = new Metadata({
  artist: require("./artist.test")(),
  beatmap: require("./beatmap.test")(),
});

metadata.creator = require("./creator.test")();
metadata.song = require("./song.test")();

// Write test.
if (!fs.existsSync("test/result")) {
  fs.mkdirSync("test/result");
}
fs.writeFileSync("test/result/metadata.lsb", metadata.toString(), {
  flag: "w+",
});

// Read test.
const jsonString = fs.readFileSync("test/result/metadata.lsb", "utf-8");
const readMetadata = new Metadata();
readMetadata.fromJson(JSON.parse(jsonString));

console.log(
  readMetadata.toString() == jsonString ? "Test passed!" : "Test failed!"
);
