const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());

const todos = require('./api/todos')

app.get("/", (req, res) => {
	res.json({ message: "Welcome to todo list application." });
});

app.use("/todos", todos);


app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});