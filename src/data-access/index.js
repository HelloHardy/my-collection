const { makeToysDb } = require("./toys-db");
const { createDataBase } = require('../utils/memoryDataBase');

const InMemoryDataBase = createDataBase();

const toysDb = makeToysDb({ InMemoryDataBase });

module.exports = { toysDb };
