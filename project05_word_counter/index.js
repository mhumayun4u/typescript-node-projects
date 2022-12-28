#!/usr/bin/env node
import inquirer from "inquirer";
let loop = true;
do {
    let answer = await inquirer.prompt([
        {
            "type": "input",
            "name": "words",
            "message": "Enter Sentence to Count the Word: "
        }
    ]);
    let content = answer.words.trim().split(" ");
    //console.log(content);
    console.log(`Your sentence word count is ${content.length}`);
    let replay = await inquirer.prompt([
        {
            "type": "confirm",
            "name": "inp",
            "message": "Do you want to check more sentces? ",
            "default": true
        }
    ]);
    loop = replay.inp;
} while (loop);
