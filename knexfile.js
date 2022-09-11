module.exports = {
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "0000",
    database: "project",
  },
  migrations: {
    directory: './db/migrations'
  },
};
