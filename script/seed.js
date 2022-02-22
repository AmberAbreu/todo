"use strict";

const {
	db,
	models: { Todo },
} = require("../server/db");

async function seed() {
	await db.sync({ force: true }); // clears db and matches models to tables
	console.log("db synced!");

	//Creating Todos

	const todos = await Promise.all([
		Todo.create({
			name: "Pick up groceries",
		}),
		Todo.create({
			name: "Walk dog",
		}),
		Todo.create({
			name: "Cook dinner",
		}),
		Todo.create({
			name: "Clean room",
		}),
	]);


	console.log(`seeded ${todos.length} todos`);
	console.log(`seeded successfully`);
}

async function runSeed() {
	console.log("seeding...");
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log("closing db connection");
		await db.close();
		console.log("db connection closed");
	}
}

if (module === require.main) {
	runSeed();
}

module.exports = seed;
