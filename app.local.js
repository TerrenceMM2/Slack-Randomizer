// Execute `node app.local.js` to run the app server locally.

'use strict'

const app = require('./app');

const port = process.env.PORT || 3000

app.listen(port, () =>   console.log(`Server is listening on port ${port}.`));