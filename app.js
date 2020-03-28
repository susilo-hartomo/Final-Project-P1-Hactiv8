const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const route = require('./routes')
const session = require('express-session')

let config = {
    secret: 'orion-hub'
}

app.set('view engine', 'ejs')
app.use(session(config))
app.use(express.urlencoded({ extended: true }))

app.locals.formatDate  = require('./helpers/formatterDate') // UNTUK HELPERS

app.use(route)

app.listen(port, () => console.log(`Listening on port ${port}!`))