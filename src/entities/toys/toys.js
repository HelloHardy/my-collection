const buildMakeToy = ({ Id }) => {
  return ({
    id = Id.makeId(),
    name,
    tags = [],
    collectorName,
    addedOn = Date.now(),
    modifiedOn = Date.now(),
    descriptions,
  } = {}) => {
    if (!Id.isValidId(id)) {
      throw new Error('Toy must have a valid id.');
    }

    if (!name) {
      throw new Error('Toy must have an author.');
    }

    if (!collectorName) {
      throw new Error('Toy must have a collector.');
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getTags: () => tags,
      getAddedOn: () => addedOn,
      getModifiedOn: () => modifiedOn,
      getDescriptions: () => descriptions,
      getCollectorName: () => collectorName,
    });
  };
};

module.exports = { buildMakeToy };
