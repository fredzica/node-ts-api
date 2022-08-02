import express from 'express'

import main from './controllers/main'

const app = express()
const port = 3000

app.use('/main', main)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
