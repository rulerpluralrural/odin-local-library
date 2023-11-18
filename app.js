const express = require("express");
const app = express();
const path = require("path");
const connectDb  = require("./db");
const port = process.env.port || 3000;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog");

connectDb().catch((err) => {
	console.log(err)
})

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/catalog", catalogRouter);

app.listen(port, (err) => {
	if (err) console.log(err);
	console.log(`Server running on port ${port}`);
});
