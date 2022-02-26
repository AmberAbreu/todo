const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const todos = require('./api/todos')

app.use(express.static(path.resolve(__dirname, "../client/public")));

app.use("/todos", todos);

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "client/public", "index.html"));
});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});