#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter the num 1", type: "number", name: "num1" },
    { message: "Enter the num 2", type: "number", name: "num2" },
    { message: "select the opertation", type: "list", name: "operator", choices: ["addition", "subtraction", "division", "multiplication"] }
]);
if (answer.operator === "addition") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator == "subtraction") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator == "multiplication") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator == "division") {
    console.log(answer.num1 / answer.num2);
}
