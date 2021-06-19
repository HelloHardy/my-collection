const { toyService } = require("../usecases/toys");
const { makePostToy } = require("./toy/post-toy");
const { makeGetToy } = require("./toy/get-toy");

const postToy = makePostToy({ addToy: toyService.addToy });
const getToy = makeGetToy({ getToy: toyService.getToy });

const toyController = Object.freeze({
    postToy,
    getToy,
});

module.exports = { toyController };
