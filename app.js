import fs from 'fs';
import generateReadme from './src/generateReadme.js'
import inquirer from 'inquirer';
import questions from './src/questions.js'


inquirer.prompt(questions)
	.then((data) => {	
		fs.writeFile('./README.md', generateReadme(data), err => {
			if (err) throw new Error(err)
			console.log('README complete!')
		})
	})