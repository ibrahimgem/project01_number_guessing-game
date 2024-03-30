#! /usr/bin/env node
import inquirer from "inquirer";
let randomNum = Math.floor(Math.random() * 10 + 1);
let answers = await inquirer.prompt([
    {
        name: "userguessednum",
        type: "number",
        message: "Please guess a number between 1 to 10:"
    },
]);
if (answers.userguessednum === randomNum) {
    console.log("Congratulations! You guessed it right.");
}
else
    console.log("Ops, you guessed wrong number.");
