# auth-api

> Author: Andrew Schiller

> ## Problem Domain

Extend the restrictive capabilities of our routes to our API, implementing a fully functional, authenticated and authorized API Server using the latest coding techniques.

> ## UML

> ## Getting Started

> ### Standard dependencies

- express, supertest, jest, cors, dotenv

> ### SQL-specific dependencies

- sequelize, sequelize-cli, pg, sqlite3

> ### Auth dependencies

- base-64, bcrypt

> ### >>> **Important setup** <<<

- To enable a test environment, go into the `package.json` file and insert `NODE_ENV=test ` at the start of the `test` value (in front of `jest --verbose --coverage`), which is in `scripts`.

> ## Links

- [GitHub pull request](https://github.com/schillerandrew/auth-api/pull/1)
- [GitHub actions](https://github.com/schillerandrew/auth-api/actions)

> ## Architecture

- **runtime:** Node
- **server:** Express
- **database:** PostgreSQL
- **deployment:** Heroku