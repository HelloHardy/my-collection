const makeGetToy = ({ getToy }) => {
    return async (req, res) => {
        try {
            const toyId = req.params.toyId;
            const toy = await getToy(toyId);

            res.status(200).send(toy);
        } catch (error) {
            console.log(error);
            res.status(500).send({ error: 'An unkown error occurred.' });
        }
    };
};

module.exports = { makeGetToy }; 
