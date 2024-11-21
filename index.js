const port = process.env.PORT || 3000
const app = require('./app/app.js')

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})