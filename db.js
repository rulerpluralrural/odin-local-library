require("dotenv").config()

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.databaseURL;

module.exports = async function connectDb() {
	await mongoose.connect(mongoDB);
}
