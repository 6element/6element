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

In the psql console (just type `psql` to access it), you can init your db with:

```
alter user postgres password 'toto';
CREATE DATABASE element OWNER postgres;
```

In your regular console:

```
node tools/init-database.js
```

```
node tools/update-tables.js // if you want to add or modify your tables, it doesnt drop the tables, so you're fine
```

you can always use `psql` separately to load and dump data:

```
psql -p5432 -U postgres -d element < Desktop/latest.sql
```

### Running the app

#### Daily routine in dev

```
npm run dev
```


### Deploying in production

````
npm run prod
````
