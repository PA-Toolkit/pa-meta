const { Artist, LinkType } = require("..");

module.exports = function testArtist() {
  const artist = new Artist({
    name: "Artist Name",
    link: "artist-name",
    linkType: LinkType.YoutubeMusic,
  });
  const artistString = artist.toString();

  const newArtistJson = JSON.parse(artistString);
  const newArtist = new Artist();
  newArtist.fromJson(newArtistJson);

  const newArtistString = newArtist.toString();
  if (artistString !== newArtistString) {
    throw new Error("Artist test failed!");
  }

  return artist;
};
