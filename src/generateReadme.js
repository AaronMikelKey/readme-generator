const generateReadme = (data) => {
	const { title, description, installation, usage, license, contributing, tests, github, email } = data
	let licenseBadge
	// switch to get the badge for licenses 
	switch (license) {
		case 'MIT':
			licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
			break
		case 'Apache-2.0':
			licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
			break
		case 'GPL-3.0':
			licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
			break
		case 'ISC':
			licenseBadge = ` [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
			break
		case 'BSD-2-Clause':
			licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
			break
		case 'BSD-3-Clause':
			licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
			break
		case 'BSD-4-Clause':
			licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_4--Clause-blue.svg)](https://opensource.org/licenses/BSD-4-Clause)`
			break
	}
	// Formatted README file
	return `# ${title}

## Description
${licenseBadge}

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