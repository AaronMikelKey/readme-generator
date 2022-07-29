const fs = require('fs');
const generateReadme = require('./src/generateReadme');

const profileDataArgs = process.argv.slice(2)
const [title , tableOfContents, installation, usage, license, contributing, tests, questions] = profileDataArgs

//TODO: Add function to prompt questions and then generate readme from those answers

fs.writeFile('./README.md', generateReadme(title , tableOfContents, installation, usage, license, contributing, tests, questions), err => {
  if (err) throw new Error(err)

  console.log('README complete!')
})