const { Id } = require('../../utils/id');
const { buildMakeToy } = require('./toys');

const makeToy = buildMakeToy({ Id });

module.exports = { makeToy };
