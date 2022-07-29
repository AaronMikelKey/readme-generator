import inquirer from "inquirer"
//title , tableOfContents, installation, usage, license, contributing, tests, questions
const promptUser = () => {
	inquirer.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'What is your projects title?'
		},
		{
			type: 'input',
			name: 'installation',
			message: 'Are there instructions for installation?'
		},
		//TODO: Add rest of the questions
	])
	.then((answers) => {
		return answers
	})
	.catch((err) => console.error(err))
}