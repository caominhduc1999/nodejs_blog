const mongoose = require('mongoose');
const URL = 'mongodb+srv://caominhduc1999:Caominhduc1999@cluster-mongo-test.vuptcfb.mongodb.net/mongodb?retryWrites=true&w=majority'


async function connect() {
    try {
        await mongoose.connect(
          URL,
          { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = { connect }