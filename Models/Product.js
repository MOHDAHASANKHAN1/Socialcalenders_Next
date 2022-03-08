import mongoose from "mongoose";

var productSchema = new mongoose.Schema({
    Category: String,
    Subcategory: [{
        name: String,
        Product: [{
            tittle: String,
            date: String,
            productaddername: String,
            oprice: String,
            cprice: String,
            productpath: String,
            description: String,
            image: [{ url: String, id: String }]
        }]
    }]
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema)