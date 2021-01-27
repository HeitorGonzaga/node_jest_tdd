module.exports = {
    test: {
        client: "pg",
        version: '11',
        connection: {
            host: "localhost",
            user: "postgres",
            password: "infosys!@#123",
            database: "teste"
        },
        migrations:{
            directory: "./src/migrations",
        },
    }
};