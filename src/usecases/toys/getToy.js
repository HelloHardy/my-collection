const makeGetToy = ({ toysDb }) => {
    return async (id) => {
        const toy = await toysDb.retrieve(id);

        if (!toy) {
            return 'No Collection Found.';
        }

        return toy;
    }
};

module.exports = { makeGetToy };
