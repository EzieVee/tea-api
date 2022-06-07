const express = require('express')
const app = express()
const cors = requires('cors')
const PORT = 8000

app.use(cors())

const tea = {
  'oolong': {
    'type': 'black',
    'origin': 'Yo mammas House',
    'waterTemp': 200,
    'steepTimeSeconds': 180,
    'caffeinated': true,
    'flavor': 'delicious'
  },

  'unknown': {
    'type': 'black',
    'origin': 'unknown',
    'waterTemp': 0,
    'steepTimeSeconds': 0,
    'caffeinated': false,
    'flavor': 'unknown'
  },

  'matcha': {
    'type': 'green',
    'origin': 'Yo momma house',
    'waterTemp': 200,
    'steepTimeSeconds': 80,
    'caffeinated': false,
    'flavor': 'amazing'
  },

}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (request, response) => {
  console.log(request.params.name)
  const teaName = request.params.name.toLowerCase()

  if (tea[teaName]) {
    response.json(tea[teaName])
  } else response.json(tea['unknown'])

  // response.json(tea)
})



// Listening Section
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}`);
})