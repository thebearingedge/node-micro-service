const pg = require('pg')
const express = require('express')
const createApi = require('./api/create-api')

const app = express()
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
})

app.use('/api', createApi({ db }))

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})
