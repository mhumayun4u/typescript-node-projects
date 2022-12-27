#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
const todoList = [];
const todoListAdd = async () => {
    let loop = true;
    do {
        let addTodoItem = await inquirer.prompt([
            {
                type: "input",
                name: "todo",
                message: "Item",
                validate: async (inp) => {
                    if (inp) {
                        return true;
                    }
                    else {
                        return "Can not be empty!";
                    }
                }
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Item added. Do you want to add more?",
                default: true
            }
        ]);
        todoList.push(addTodoItem.todo);
        loop = addTodoItem.addmore;
    } while (loop);
};
/// Main Function
const menuFunc = async function () {
    let menuOptions = await inquirer.prompt([
        {
            type: "rawlist",
            name: "inp",
            message: "Select Option",
            choices: ["Todo List", "Add item", "Exit"],
        }
    ]);
    switch (menuOptions.inp) {
        case "Todo List":
            if (todoList.length > 0) {
                console.log(chalk.greenBright("======Your Todo List======"));
                todoList.forEach((element, index) => {
                    console.log(chalk.yellow((index + 1), element));
                });
            }
            else {
                console.log("No todos found.");
                await menuFunc();
            }
            //await menuFunc();
            break;
        case "Add item":
            await todoListAdd();
            await menuFunc();
            break;
        case "Exit":
            break;
    }
};
await menuFunc();
console.log("Thank you.");
