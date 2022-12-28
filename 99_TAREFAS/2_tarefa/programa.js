const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o nome do usuário?'
    }, {
        name: 'idade',
        message: 'Qual a idade do usuário?'
    }
])
.then((answers) => {
    console.log(chalk.bgYellow.black(`O usuário ${answers.nome} tem ${answers.idade} anos`))
})
.catch(err => console.log(err))