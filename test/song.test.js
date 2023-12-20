const { Song, Difficulty } = require("..");

module.exports = function () {
  const song = new Song({
    title: "Song Title",
    difficulty: Difficulty.Expert,
    description: "Song description.",
  });
  const songString = song.toString();

  const newSongJson = JSON.parse(songString);
  const newSong = new Song();
  newSong.fromJson(newSongJson);

  console.log(`Song string: ${songString}`);
  if (songString !== newSong.toString()) {
    throw new Error("Song test failed!");
  }

  return song;
};
