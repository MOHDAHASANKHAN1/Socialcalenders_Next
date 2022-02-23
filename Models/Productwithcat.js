import mongoose from "mongoose";

var catSchema = new mongoose.Schema({
    name: [String],
    subcategory: [{
        name: String,
        product: [{
            tittle: String,
            date: String,
            productaddername: String,
            oprice: String,
            cprice: String,
            productpath: String,
            description: String
        }]
    }]
});

module.exports = mongoose.models.Productwithcat || mongoose.model('Productwithcat', catSchema)