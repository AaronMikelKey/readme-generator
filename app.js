import fs from 'fs';
import generateReadme from './src/generateReadme.js'
import inquirer from 'inquirer';
import questions from './src/questions.js'


inquirer.prompt(questions)
	.then((data) => {	
		// dir can be changed to output the file wherever you want
		const dir = './dist'
		if (!fs.existsSync(dir)) {fs.mkdirSync(dir)}
		fs.writeFile(dir + '/README.md', generateReadme(data), err => {
			if (err) throw new Error(err)
			console.log('README complete!')
		})
	})