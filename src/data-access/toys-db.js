const makeToysDb = ({ InMemoryDataBase }) => {
  const db = new InMemoryDataBase();

  const insert = async ({ ...toyInformation }) => {
    await db.set(toyInformation)
      .catch(e => console.log(e));

    return toyInformation.id;
  }

  const retrieve = async (id) => {
    const toy = await db.get(id)
      .catch(e => console.log(e));

    return toy;
  }

  return Object.freeze({
    insert,
    retrieve
  });
}

module.exports = { makeToysDb };
