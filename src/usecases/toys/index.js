const { makeAddToy } = require("./addToy");
const { makeGetToy } = require("./getToy");
const { toysDb } = require("../../data-access");

const addToy = makeAddToy({ toysDb });
const getToy = makeGetToy({ toysDb });

const toyService = Object.freeze({
    addToy,
    getToy,
});

module.exports = { toyService };
