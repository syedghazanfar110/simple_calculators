#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([{
    message : "Enter user input a first value",
    type : "number",
    name : "firstNumber",
},

{ message : "Enter user input a secend number",
type : "number",
name : "secendNumber",

},
{message : "salect one of the opratore to parfom action",
type : "list",
name : "opratore",
choices : ["Addition","Subtraction","Maltiplication","Division"]
},
]);
// Canditional Statment
if (answer.opratore === "Addition"){
    console.log(answer.firstNumber + answer.secendNumber);
}else if (answer.opratore === "Subtraction"){
    console.log(answer.firstNumber - answer.secendNumber);
}else if (answer.opratore === "Maltiplication"){
    console.log(answer.firstNumber * answer.secendNumber);
}else if (answer.opratore === "Division"){
    console.log(answer.firstNumber / answer.secendNumber);
}else {
    console.log("please valide opratore");
}