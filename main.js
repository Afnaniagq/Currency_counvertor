#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\tWELCOME TO CURRENCY CONVERTOR APPLICATION"));
//LIST OF CURRENCY AND EXCHANGE RATE:
const currency = {
    USD: 1, //Base amount:
    EUR: 0.91, //(European currency)
    GBP: 0.76, //(united kingdom)
    SAD: 0.27, //saudia currency)
    JYP: 113, //(japness currenvy)
    PKR: 280 //(pakistani rupess)
};
//PROMPT FOR SELECT CURRENCY "FROM" 7 "TO":
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.green("Enter the currency you want to convert from:"),
        choices: ["USD", "EUR", "GBP", "SAD", "JYP", "PKR"]
    },
    {
        name: "To",
        type: "list",
        message: chalk.green("Enter the currency you want to convert in:"),
        choices: ["USD", "EUR", "GBP", "SAD", "JYP", "PKR"]
    },
    {
        name: "Amount",
        type: "number",
        message: chalk.green("Enter the amount you want to convert")
    }
]);
//CURRENCY CONVERSION USING FORMULA;
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.To];
let userAmount = user_answer.Amount;
//FORMULA OURRENCY EXCHANGE :
let baseAmount = userAmount / fromAmount; //Base amount which is in dollar
let convertedAmount = baseAmount * toAmount;
//CONSOLE FINAL CONVERTED AMOUNT:
console.log(`Your converted Amount is "${convertedAmount.toFixed(2)}"`);
