/*
  Metadata generator test.
*/
const {
  CreateMetadata,
  LinkType,
  CreateBeatmap,
  CreateSong,
  Difficulty,
  CreateCreator,
} = require("..");
const fs = require("fs");

// Create new metadata, leaving unassigned fields to default.
const metadata = CreateMetadata({
  artist: {
    name: "Test Artist",
    link: "testArtist",
    linkType: LinkType.Spotify,
  },
  beatmap: CreateBeatmap({
    dateEdited: Date.now(),
    gameVersion: "20.4.4",
  }),
});

// Assigning Creator using helper.
metadata.creator = CreateCreator({
  steamName: "Test Creator",
});

// Assigning Song directly.
metadata.song = {
  title: "Test Song",
  difficulty: Difficulty.Easy,
  description: "Test Description",
};

// Write test.
if (!fs.existsSync("test/result")) {
  fs.mkdirSync("test/result");
}
fs.writeFileSync("test/result/metadata.lsb", metadata.toString(), {
  flag: "w+",
});

// Read test.
const jsonString = fs.readFileSync("test/result/metadata.lsb", "utf-8");
const readMetadata = CreateMetadata(JSON.parse(jsonString));

console.log(
  readMetadata.toString() == jsonString ? "Test passed!" : "Test failed!"
);
