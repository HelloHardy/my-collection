const createDataBase = () => {
    class InMemoryDatabase {
        constructor() {
            this.db = {};
        };

        async set (data) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.db[data.id] = data;
                    resolve();
                }, 1000);
            });
        };

        async get (id) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.db[id]);
                }, 1000);
            });
        };
    }

    return InMemoryDatabase;
};

module.exports = { createDataBase };
