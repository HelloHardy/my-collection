const makePostToy = ({ addToy }) => {
    return async (req, res) => {
        try {
            const toy = req.body;
            const response = await addToy(toy);

            res.status(200).send(response);
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: 'An unkown error occurred.' });
        }
    };
};

module.exports = { makePostToy};
