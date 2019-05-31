let app = require('express')()

app.get('/', (request, response) => {
    response.send('Bonjour')
  })

  app.listen(8080)