const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const todos = require('./api/todos')

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
}



app.use("/todos", todos);

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "client/build", "index.html"));
});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});