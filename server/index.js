const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json());

const todos = require('./api/todos')



app.use("/todos", todos);
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});


app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});