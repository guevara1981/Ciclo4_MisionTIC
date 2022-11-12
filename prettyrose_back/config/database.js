const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "pb";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mogoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
    
}