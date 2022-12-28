#!/usr/bin/env node 

import inquirer from "inquirer";
 
async function mainProgram() {

    let conversion = {
        "PKR": {
            "PKR": 1,
            "USD": 0.0044,
            "AED": 0.016,
            "GBP": 0.0036,
            "EUR": 0.0041
        },
        "USD": {
            "PKR": 226.91,
            "USD": 1,
            "AED": 3.67,
            "GBP": 0.83,
            "EUR": 0.94
        },
        "AED": {
            "PKR": 61.78,
            "USD": 0.27,
            "AED": 1,
            "GBP": 0.23,
            "EUR": 0.26
        },
        "GBP": {
            "PKR": 274.14,
            "USD": 1.21,
            "AED": 4.44,
            "GBP": 1,
            "EUR": 1.14
        },
        "EUR": {
            "PKR": 241.49,
            "USD": 1.06,
            "AED": 3.91,
            "GBP": 0.88,
            "EUR": 1
        }
    };
    
    let answer: {
        from: "PKR" | "USD" | "AED" | "GBP" | "EUR",
        to: "PKR" | "USD" | "AED" | "GBP" | "EUR",
        amount: number
    }
    = await inquirer.prompt([
        {
            "type": "list",
            "name": "from",
            "choices": ["PKR", "USD", "AED", "GBP", "EUR"],
            "message": "SELECT YOUR CURRENCY: "
        },
        {
            "type": "list",
            "name": "to",
            "choices": ["PKR", "USD", "AED", "GBP", "EUR"],
            "message": "SELECT CONVERSION CURRENCY: "
        },
        {
            "type": "number",
            "name": "amount",
            "message": "ENTER AMOUNT: "
        }
    ]);
    
    const {from, to, amount} = answer;
    
    if( from && to && amount ){
        let result = conversion[from][to] * amount; 
        console.log(`${amount}${from} = ${result.toFixed(4)}${to}`);
    
    }else {
        console.log("Invalid Input!");
    }     
    
}
 
let loop: boolean = true;

do{
 
   await mainProgram();

    let startProgram: {
        inp: boolean;
    } = await inquirer.prompt([
        {
            "type": "confirm",
            "name": "inp",
            "message": "Want more conversion? ",
            "default": true 
        }
    ]);
    

    loop = startProgram.inp;


}while(loop);