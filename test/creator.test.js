const { Creator } = require("..");

module.exports = function () {
  const creator = new Creator({
    steamName: "Creator Name",
    steamId: 212345678,
  });
  const creatorString = creator.toString();

  const newCreatorJson = JSON.parse(creatorString);
  const newCreator = new Creator();
  newCreator.fromJson(newCreatorJson);

  console.log(`Creator string: ${creatorString}`);
  if (creatorString !== newCreator.toString()) {
    throw new Error("Creator test failed!");
  }

  return creator;
};
