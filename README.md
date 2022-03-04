# My Shopify Backend
Back end for an e-commerce site using Express.js API and using Sequelize to interact with a MySQL database.

## Description
- Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

- This application is the back end for an e-commerce site configured in Express.js API and using Sequelize to interact with a MySQL database.

- This application will perform CRUD commands and alter the data in the MySql database

- This application allows a user to keep track of their categories, products, and tags for the store

## Table of Contents

- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [Contribute](#Contribute)

## License

- Unlicensed

Refer to [https://choosealicense.com/](https://choosealicense.com/).

## Installation

To install this application, please follow the steps below:
- Run `mysql -u root -p` to `source db/schema.sql`. Then run `npm i` and `npm run seed` to seed data to the database to test the routes.

- EXTENSIONS:
    - api/categories/:id
    - api/products/:id
    - api/tags/:id

## Usage

- Video: https://youtu.be/xK3P8_99vbQ
- GitHub: https://github.com/smeske10/My-Shopify-Backend 

## Features

- Get all Category, Product, and Tag models 
- Get Category, Product, and Tag models by ID
- Create new Category, Product, and Tag models (body: JSON)
- Update Category, Product, and Tag models by ID (body: JSON)
- Delete Category, Product, and Tag models by ID

## Credits

- This application uses [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to the MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

## Questions 

If you have any questions about the repo, open an issue or contact me directly at undefined. You can find more of my work at [smeske10](https://github.com/smeske10/).

## Contribute

- Contact me directly at my GitHub

The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
