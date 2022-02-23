import mongoose from 'mongoose';

function initDB() {
    if (mongoose.connections[0].readyState) {
        console.log("alredy connected")
        return
    }
    mongoose.connect("mongodb+srv://ahsan:ahsan@cluster0.wstmu.mongodb.net/Products?retryWrites=true&w=majority", {
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