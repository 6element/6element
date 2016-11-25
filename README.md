# 6element

6element is a open innovation project of waste optimisation. **[Learn more](https://medium.com/ants-blog/6element-534ffbe2a60f#.wd3yf7ez6)**

# Install

## Requirements

Install:

* Node.js 4.0
* Postgresql 9.4
* [Postgis](http://postgis.net/install/)

## Project dependencies

```bash
npm install
```

# Configure

## Environment variables

| name                | required | type   | defaults    | description
| ---                 | ---      | ---    | ---         | ---         
| `PHEROMON_URL`      | ☑️       | string | https://pheromon.ants.builders            | Pheromon API URL
| `PHEROMON_API_TOKEN`| ☑️       | string |             | Secret used to query Pheromon API
| `GOOGLE_MAPS_API_KEY`| ☑️      | string |             | [Google Maps API Key](https://console.developers.google.com/projectselector/apis/api/places_backend/overview)
| `DATABASE_URL`      | ☑️       | integer|             | `postgres://...`
| `PORT`              |          | integer| 3000        | HTTP port of the Node app
| `NODE_ENV`          |          | string | development | Node app mode


## Database setup

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

# Run

## With docker-compose

```bash
docker-compose run web npm run db:install
docker-compose up --build web
```

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

# License

    MIT License

    Copyright (c) 2016 Ants, 6element and contributors

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
