const { makeToy } = require('../../entities/toys');

const makeAddToy = ({ toysDb }) => {
  return async (toyInformation) => {
    const toy = makeToy(toyInformation);

    return await toysDb.insert({
      id: toy.getId(),
      name: toy.getName(),
      tags: toy.getTags(),
      getAddedOn: toy.getAddedOn(),
      getModifiedOn: toy.getModifiedOn(),
      descriptions: toy.getDescriptions(),
      collectorName: toy.getCollectorName()
    });
  };
}

module.exports = { makeAddToy };
