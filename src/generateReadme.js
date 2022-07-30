const generateReadme = (data) => {
	const { title, description, installation, usage, license, contributing, tests, github, email } = data
	//TODO: add a badge for that license near the top of the README
	return `# ${title}

## Description

${description}

---

## Table of Contents

[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Contributing](#Contributing)

[Tests](#Tests)

[Questions](#Questions)

---

## Installation

${installation}

---

## Usage

${usage}

---

## License

${license}

---

## Contributing

${contributing}

---
## Tests
${tests}

---

## Questions?

For any questions, please visit my Github: [github.com/${github}](https://github.com/${github})

or send me an email at [${email}](mailto:${email})
`
}

export default generateReadme