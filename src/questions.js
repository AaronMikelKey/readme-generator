const throwError = (errorMessage) => {throw Error(`Please provide ${errorMessage}.`)} // Function is needed to use in a ternary

const questions = [
		{
			type: 'input',
			name: 'title',
			message: 'What is your project\'s title?',
			validate(answer) {
				return answer !== '' ? true : throwError('a title')
			}
		},
		{
			type: 'input',
			name: 'description',
			message: 'Enter a description of your project: ',
			validate(answer) {
				return answer !== '' ? true : throwError('a description')
			}
		},
		{
			type: 'input',
			name: 'installation',
			message: 'What are the instructions for installation?',
			validate(answer) {
					return answer !== '' ? true : throwError('instructions on installing your project.')
				}
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Describe how to use your project: ',
			validate(answer) {
				return answer !== '' ? true : throwError('how to use your project')
			}
		},
		{
			type: 'list',
			name: 'license',
			message: 'What is your project\'s license?',
			choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'ISC', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-4-Clause' ],
		},
		{
			type: 'input',
			name: 'contributing',
			message: 'Provide instructions on how to contribute to your project: ',
			validate(answer) {
				return answer !== '' ? true : throwError('instructions on how to contribute to your project')
			}
		},
		{
			type: 'input',
			name: 'tests',
			message: 'Are there instructions for testing?',
			validate(answer) {
				return answer !== '' ? true : throwError('instructions for testing your project.')
			}
		},
		{
			type: 'input',
			name: 'github',
			message: 'What is your github username?',
			validate(answer) {
				return answer !== '' ? true : throwError('your github username')
			}
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is your email address?',
			async validate(answer) {
				await new Promise((resolve) => resolve(answer !== '' ? true : throwError('your email address')))
				return true
			},
			async validate(answer) {
				const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
				await new Promise((resolve) => resolve(emailRegEx.test(answer) ? true : throwError('a valid email address')))
				return true
			}
		},
	]

	export default questions