const mongoose = require('mongoose')

const url = process.env.ATLAS_URI
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true
})
  .then(()=> console.log('db connected successfully'))
  .catch((err)=> console.log(err.message))


