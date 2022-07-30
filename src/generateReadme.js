const generateReadme = (data) => {
	const { title, description, installation, usage, license, contributing, tests, github, email } = data
	let licenseBadge, licenseLink, licenseSection, licenseContents
	// switch to get the badge for licenses 
	switch (license) {
		case 'MIT':
			licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
			licenseLink = `[MIT License](https://opensource.org/licenses/MIT)`
			break
		case 'Apache-2.0':
			licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
			licenseLink = `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
			break
		case 'GPL-3.0':
			licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
			licenseLink = `[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)`
			break
		case 'ISC':
			licenseBadge = ` [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
			licenseLink = `[ISC License](https://opensource.org/licenses/ISC)`
			break
		case 'BSD-2-Clause':
			licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
			licenseLink = `[BSD 2-clause License](https://opensource.org/licenses/BSD-2-clause)`
			break
		case 'BSD-3-Clause':
			licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
			licenseLink = `[BSD 3-clause License](https://opensource.org/licenses/BSD-3-clause)`
			break
		case 'BSD-4-Clause':
			licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_4--Clause-blue.svg)](https://opensource.org/licenses/BSD-4-Clause)`
			licenseLink = `[BSD 4-clause License](https://opensource.org/licenses/BSD-4-clause)`
			break
	}

	!licenseBadge ? licenseSection = '' : licenseSection = `\n## License\n\n${licenseLink}\n\n---\n\n`

	!licenseBadge ? licenseContents = '' : licenseContents ='\n\n[License](#License)'
	// Formatted README file
	return `# ${title}

## Description
${licenseBadge || ''}

${description}

---

## Table of Contents

[Installation](#Installation)

[Usage](#Usage)${licenseContents}

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
${licenseSection}
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