# Eat Dat Burger
[![GitHub issues](https://img.shields.io/github/issues/Conanas/eat-dat-burger)](https://github.com/Conanas/eat-dat-burger/issues) [![GitHub forks](https://img.shields.io/github/forks/Conanas/eat-dat-burger)](https://github.com/Conanas/eat-dat-burger/network) [![GitHub stars](https://img.shields.io/github/stars/Conanas/eat-dat-burger)](https://github.com/Conanas/eat-dat-burger/stargazers) [![GitHub license](https://img.shields.io/github/license/Conanas/eat-dat-burger)](https://github.com/Conanas/eat-dat-burger/blob/main/LICENSE)

## Description

A fully responsive full-stack, Node.js, Handlebars.js web app that lets clients produce a database of burgers that they would like to eat and once they eat those burgers they can then tick off those burgers as "devoured" and the burgers are then put into the devoured list on the web page.

Clients submit a burger that they woud like to eat and that burger is added to a mySQL database of burgers that have or have not been devoured. The web app then reads this database of burgers and produces 2 lists for the user. One list is of burgers that are yet to be devoured and the other list is of burgers that have been devoured in the database.

The clients new burger will be autmatically listed as yet to be devoured with a devour button next to it, when the client clicks the devour button then the burger's devoured state in the database is changed to true. The burger is then placed into the devoured list.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Handlebars.js
- Express.js
- mySQL

## Screenshot

![Eat Dat Burger Screeshot](screenshot\eat-dat-burger-screenshot.png "Eat Dat Burger Screeshot")