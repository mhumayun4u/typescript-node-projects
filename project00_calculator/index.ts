#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

//console.log(chalk.yellow("heelo"));


const sleep = (time: number) => {
    return new Promise((res)=>{
        setTimeout(res, time);
    })
}


async function welcomeScreen() {
    let rainbowTitle = chalkAnimation.rainbow(`Let Start the Calculations`);  
    await sleep(1000);
    rainbowTitle.stop(); 
    let rainbowTitle2 = chalkAnimation.rainbow(`Developed By Muhammad Humayun`); 
    await sleep(1000);
    rainbowTitle2.stop(); 
    console.log(chalk.green(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    `));
    
}

await welcomeScreen();

async function questionPrompt() {
    const answers = await inquirer
    .prompt([
        {
            type: "list",
            name: "operation",
            message: "Which operation you want to perform? \n",
            choices: ["Addition", "Substraction", "Multiplication", "Devision"]
        },
        {
            type: "number",
            name: "val1",
            message: "Enter First Number: ",
        },
        {
            type: "number",
            name: "val2",
            message: "Enter Second Number: ",

        }
    ])
    //console.log(answers);

    if(answers.operation == "Addition"){
        console.log(`${answers.val1} + ${answers.val2} = ${answers.val1 + answers.val2}`);
    }
    else if(answers.operation == "Substraction"){
        console.log(`${answers.val1} - ${answers.val2} = ${answers.val1 - answers.val2}`);
    }
    else if(answers.operation == "Multiplication"){
        console.log(`${answers.val1} * ${answers.val2} = ${answers.val1 * answers.val2}`);
    }
    else if(answers.operation == "Devision"){
        console.log(`${answers.val1} / ${answers.val2} = ${answers.val1 / answers.val2}`);
    }
}




async function startAgain() {

    do{

        await questionPrompt();
        var startQuestion = await inquirer
        .prompt({
                type: "input",
                name: "inp",
                message: "Do you want to continue? Press y or n ",
            });

    }while(startQuestion.inp == "y" || startQuestion.inp == "Y");
    
}

startAgain();