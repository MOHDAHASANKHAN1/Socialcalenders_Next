import mongoose from "mongoose";

var productSchema = new mongoose.Schema({
    category: [String],
    industry: String,
    tittle: String,
    date: String,
    productaddername: String,
    oprice: String,
    cprice: String,
    productpath: String,
    description: String,
    imageurl: [String],
    imageid: [String]
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema)