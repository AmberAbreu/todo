const Sequelize = require("sequelize");
const db = require("../db");

const Todo = db.define("todo", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Budget;
