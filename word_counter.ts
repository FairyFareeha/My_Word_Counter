import inquirer from "inquirer"
let user_ans = await inquirer.prompt({
    name : 'words',
    type : 'input',
    message : 'Please enter your sentence : '
})
let word_count = user_ans.words.trim().split(' ').length
console.log(`Your sentence has ${word_count} words`);

