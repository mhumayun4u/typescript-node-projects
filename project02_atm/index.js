#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(`
    Note:
    username = test
    pin = 1234
`);
let login = false;
let currentUserIndex = -1;
;
//User data
let usersData = [
    {
        "userName": "mhumayun4u",
        "password": 123,
        "customerName": "Muhammad Humayun",
        "customerBalance": 789525
    },
    {
        "userName": "ali",
        "password": 123,
        "customerName": "Ali Khan",
        "customerBalance": 12500
    },
    {
        "userName": "test",
        "password": 1234,
        "customerName": "Test User",
        "customerBalance": 1050500
    }
];
//Starting function
async function startATM() {
    console.log(chalk.yellow("Welcome to basic ATM"));
    let inpUserName = await inquirer.prompt([
        {
            name: "inpUser",
            type: "string",
            message: chalk.blue("Enter User Name ")
        }
    ]);
    let inpUserPass = await inquirer.prompt([
        {
            name: "inpUserPass",
            type: "password",
            message: chalk.blue("Enter Password ")
        }
    ]);
    //Check user or password are correct or not
    for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].userName === inpUserName.inpUser && usersData[i].password == inpUserPass.inpUserPass) {
            currentUserIndex = i;
            login = true;
            break;
        }
    }
    //if user login successfull then call the main function
    if (login) {
        console.log(chalk.blue(usersData[currentUserIndex].customerName), "Welcome to your account.");
        mainFunction();
    }
    else {
        console.log("login failed");
    }
}
//Restart function
const restartFunc = async () => {
    let restartVar = await inquirer.prompt([
        {
            name: "inp",
            id: "string",
            message: chalk.yellow("Would you like to make Transaction (Y/n).")
        }
    ]);
    if (restartVar.inp == "n" || restartVar.inp == "N") {
        console.log("Thank you for using this ATM.");
    }
    else {
        mainFunction();
    }
};
//Transaction function
const transactionFunc = async (amount) => {
    if (amount < usersData[currentUserIndex].customerBalance) {
        console.log("Transaction Successful");
        usersData[currentUserIndex].customerBalance = usersData[currentUserIndex].customerBalance - amount;
        console.log(`You have ${usersData[currentUserIndex].customerBalance} remaining in your account`);
    }
    else {
        console.log("Insufficient Balance.");
    }
};
//Validation check is not empty
const validataionCheck = async (answer) => {
    if (!answer) {
        return 'It cannot be empty. Please enter it correctly...';
    }
    return true;
};
//Main Function
async function mainFunction() {
    let atmChoices = await inquirer.prompt([
        {
            name: "choicesInput",
            type: "rawlist",
            choices: ["Fast Cash", "Cash Withdrawal", "Fund Transfer", "Bill Payment", "Balance Inquiry", "Exit"],
            message: chalk.bold("Select any option.")
        }
    ]);
    if (atmChoices.choicesInput === "Balance Inquiry") {
        console.log(`Your Current Balance is ${usersData[currentUserIndex].customerBalance}`);
        //Restart the program function
        await restartFunc();
    }
    else if (atmChoices.choicesInput === "Fast Cash") {
        let fastcashOption = await inquirer.prompt([
            {
                name: "inp",
                type: "rawlist",
                choices: ["500", "1000", "5000", "10000", "25000"],
                message: "Select Bank",
                validate: validataionCheck,
            }
        ]);
        //Transaction function
        await transactionFunc(Number(fastcashOption.inp));
        //Restart the program function
        await restartFunc();
    }
    else if (atmChoices.choicesInput === "Cash Withdrawal") {
        let inpAmount = await inquirer.prompt([
            {
                name: "inp",
                type: "input",
                message: chalk.blue("Enter Amount "),
                validate: validataionCheck,
            }
        ]);
        //Transaction function
        transactionFunc(Number(inpAmount.inp));
        //Restart the program function
        await restartFunc();
    }
    else if (atmChoices.choicesInput === "Fund Transfer") {
        let transferOption = await inquirer.prompt([
            {
                name: "inp",
                type: "rawlist",
                choices: ["UBL", "HBL", "Meezan Bank", "MCB", "Jazzcash", "Easy Paisa"],
                message: "Select Bank",
                validate: validataionCheck,
            }
        ]);
        let transferAcc = await inquirer.prompt([
            {
                name: "inp",
                type: "input",
                message: "Enter Account Number",
                validate: validataionCheck,
            }
        ]);
        let transferAmount = await inquirer.prompt([
            {
                name: "inp",
                type: "input",
                message: "Enter Amount",
                validate: validataionCheck,
            }
        ]);
        //Transaction function
        transactionFunc(Number(transferAmount.inp));
        //Restart the program function
        await restartFunc();
    }
    else if (atmChoices.choicesInput === "Bill Payment") {
        let transferOption = await inquirer.prompt([
            {
                name: "inp",
                type: "rawlist",
                choices: ["KE", "SSGC", "PTCL", "Storm Fiber", "Moible Bill"],
                message: "Select Bill"
            }
        ]);
        let transferAcc = await inquirer.prompt([
            {
                name: "inp",
                type: "input",
                message: "Enter Account Number",
                validate: validataionCheck,
            }
        ]);
        let transferAmount = await inquirer.prompt([
            {
                name: "inp",
                type: "input",
                message: "Enter Amount",
                validate: validataionCheck,
            }
        ]);
        //Transaction function
        transactionFunc(Number(transferAmount.inp));
        //Restart the program function
        await restartFunc();
    }
    else {
        console.log("Thank you for using this ATM.");
    }
}
startATM();
