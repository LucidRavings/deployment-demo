const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

console.log(__dirname)

app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => {
    console.log('app is up on 4000')
})

