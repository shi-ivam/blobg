import mongoose from 'mongoose'

async function dbConnect() {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return
  }

  if (process.env.NODE_DEV == 'true') {
    return mongoose.connect('mongodb://127.0.0.1:27017/deblofer', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
  }
  else {
    return mongoose.connect('mongodb+srv://admin:' + process.env.MONGO_PASS + '@cluster0.0blqu.mongodb.net/deblofer', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
  }
}

export default dbConnect