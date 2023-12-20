const { Artist, LinkType } = require("..");

module.exports = function () {
  const artist = new Artist({
    name: "Artist Name",
    link: "artist-name",
    linkType: LinkType.YoutubeMusic,
  });
  const artistString = artist.toString();

  const newArtistJson = JSON.parse(artistString);
  const newArtist = new Artist();
  newArtist.fromJson(newArtistJson);

  console.log(`Artist string: ${artistString}`);
  if (artistString !== newArtist.toString()) {
    throw new Error("Artist test failed!");
  }

  return artist;
};
