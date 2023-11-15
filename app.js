const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 3000;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb://127.0.0.1:27017/libdb";

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/catalog", catalogRouter);

main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect(mongoDB);
}

app.listen(port, (err) => {
	if (err) console.log(err);
	console.log(`Server running on port ${port}`);
});
