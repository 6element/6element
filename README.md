# 6element

6element is a open innovation project of waste optimisation. **[Learn more](https://medium.com/ants-blog/6element-534ffbe2a60f#.wd3yf7ez6)**

## Getting started


### Dependencies

Install:
* Node.js 4.0
* Postgresql 9.4
* Python 2.7
* [Postgis](http://postgis.net/install/)

then use `npm install` to install all the dependencies.

### Environment variables

| name                | required | type   | defaults    | description
| ---                 | ---      | ---    | ---         | ---         
| `DATA_SOURCE`       | ☑️       | string |             | ??? (`https://.../`)
| `DATA_SOURCE_SECRET`| ☑️       | string |             | ???
| `DATABASE_URL`      | ☑️       | integer|             | `postgres://...`
| `PORT`              |          | integer| 3000        | HTTP port of the Node app
| `NODE_ENV`          |          | string | development | Node app mode


### Initialize the database

To initialise the database structure, run:

```bash
DATABASE_URL=postgres://... npm run db:install
```

When the database schema is modified, one needs to update its associated JavaScript definition:

```bash
DATABASE_URL=postgres://... npm run db:update-definitions
```

You can always use `psql` separately to load and dump data:

```bash
psql -p5432 -U postgres -d element < Desktop/latest.sql
```

### Running the app

#### docker-compose

```bash
docker-compose run web npm run db:install
docker-compose up --build web
```

#### Daily routine in dev

```
npm run dev
```


### Deploying in production

````
npm run prod
````
