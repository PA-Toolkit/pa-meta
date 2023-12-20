const { Beatmap } = require("..");

module.exports = function () {
  const beatmap = new Beatmap({
    gameVersion: "20.4.4",
  });
  const beatmapString = beatmap.toString();

  const newBeatmapJson = JSON.parse(beatmapString);
  const newBeatmap = new Beatmap();
  newBeatmap.fromJson(newBeatmapJson);

  console.log(`Beatmap string: ${beatmapString}`);
  if (beatmapString !== newBeatmap.toString()) {
    throw new Error("Beatmap test failed!");
  }

  return beatmap;
};
