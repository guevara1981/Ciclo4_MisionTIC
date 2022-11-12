const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    producto_id:{type: String, required: true, max:50},
    nombre:{type: String, required: true, max:100},
    presentacion:{type: String, required: true, max:100},

});

module.exports = mongoose.model("productos", ProductosSchema); 