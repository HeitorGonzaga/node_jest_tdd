module.exports = {
  test: {
    client: 'pg',
    version: '11',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'docker',
      database: 'teste',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
