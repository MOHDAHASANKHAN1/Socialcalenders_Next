import mongoose from 'mongoose';

function initDB() {
    if (mongoose.connections[0].readyState) {
        console.log("alredy connected")
        return
    }
    mongoose.connect(process.env.Mongo_Uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected', () => {
        console.log("connected to mongodb")
    })
    mongoose.connection.on('error', (err) => {
        console.log("error connecting", err)
    })
}


export default initDB;