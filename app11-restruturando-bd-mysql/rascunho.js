/*
RASCUNHO



app.use((request, response, next) => {
    console.log(request.headers)
    next()
  })

app.get('/', (request, response) => {
response.render('formulario', {
    name: 'wesley'
})
})

app.get('/', (request, response) => {
    throw new Error('oops')
  })
  
app.use((err, request, response, next) => {
// log the error, for now just console.log
console.log(err)
response.status(500).send('Something broke!')
})

*/