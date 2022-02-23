const db = require("./db");

const Todo = require("./models/Todo");


//associations could go here!
// Expenses.belongsTo(Categories);
// Categories.hasMany(Expenses);

module.exports = {
	db,
	models: {
		Todo
	},
};
