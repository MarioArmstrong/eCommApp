# eCommerce App

Github Link: [Github link](https://github.com/MarioArmstrong/eCommApp)

## Description

The purpose of this application is to allow an E commerce owner to view, add, and update inventory to their online store. The benefits of this application is the use of new technology for the back for an ecommerce site.

## Table of Contents

- [Descritpion](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Installation

After cloning this repository please go in the VSCode terminal and `npm i` all the dependencies. In order to continue please make sure you have downloaded MYSQL onto your computer. Next you have to start MYSQL by typing `mysql -u root -p` in the terminal, input your password, and then source the schema file by writing `source db/schema.sql` in the terminal. Once that has been source type `quit` to exist MYSQL. The next step is to seed the database, which can be done by typeing `npm run seed` in the terminal, and finally to run the server type `npm start`.

Make sure to download Insomnia in order to process the API requests. Once inside Insomnia type `http://localhost:3001/api/products/` to get the list of products, type `http://localhost:3001/api/categories/` to get a list of all the categories, and type `http://localhost:3001/api/tags/` to get all the product tags.

## Usage

![GET categories](./assets/images/GET%20categories.png)

![GET category](./assets/images/GET%20category.png)

![GET products](./assets/images/GET%20products.png)

![GET product](./assets/images/GET%20product.png)

![GET tags](./assets/images/GET%20tags.png)

![GET tag](./assets/images/GET%20tag.png)

![POST category](./assets/images/POST%20category.png)

![POST product](./assets/images/POST%20product.png)

![POST tag](./assets/images/POST%20tag.png)

![PUT category](./assets/images/PUT%20category.png)

![PUT product](./assets/images/PUT%20product.png)

![PUT tag](./assets/images/PUT%20tag.png)

![DELETE category](./assets/images/DELETE%20category.png)

![DELETE product](./assets/images/DELETE%20product.png)

![DELETE tag](./assets/images/DELETE%20tag.png)

## Credits

Dru Sanchez helped troubleshoot any issues on this application.

## How to Contribute

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## License

MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2022 Mario Armstrong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
