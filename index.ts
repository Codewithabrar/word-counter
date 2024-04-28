#! /usr/bin/env node
//import the inquirer modules from command line interface for node.js
import chalk from "chalk";
import inquirer from "inquirer";
//declare a constant "answer "and assign it to the result of inquirer=.prompt funtion
const answer: {
  sentence: string;
} = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message:`${chalk.bgRedBright.bold("Enter your sentence to count the word:")}`
        }
    ]
);const words = answer.sentence.trim().split(" ")
console.log(words)
console.log(`Your sentence word count is ${words.length}`)
