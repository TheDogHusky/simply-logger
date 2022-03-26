<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="https://cdn.discordapp.com/attachments/670181225477963776/957201328835293204/simply-logger_final.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/bFVr8K2Qv8"><img src="https://img.shields.io/discord/605900262581993472?color=5865F2&logo=discord&logoColor=white" alt="Discord Server" /></a>
    <a href="https://www.npmjs.com/package/simply-logger"><img src="https://img.shields.io/npm/v/simply-logger.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/simply-logger"><img src="https://img.shields.io/npm/dt/simply-logger.svg?maxAge=3600" alt="npm downloads" /></a>
  </p>
</div>

> A simple logger using Chalk 4.1.0 and Moment.

## Utilisation & Example

> To install it, run the following command:

```batch
npm i simply-logger
```

> Old update

```js
const myLogger = new simplylogger.Logger("MyLogger", "Europe/Paris");
//to
const myLogger = new simplylogger.Logger("MyLogger", "Europe/Paris", 12); //12 or 24  12 = Am/ PM 24 = 24 hour clock
```
> Big new update
```js
const myLogger = new simplylogger.Logger("MyLogger", "Europe/Paris")
// or
const myLogger = new simplylogger.Logger("MyLogger", "Europe/Paris", 24)
// to
const myLogger = new simplylogger.Logger("MyLogger", "Europe/Paris", 24, "./somepath", true); // the "./somepath" tell the directory to put file logs in and the true says if log in files is enabled
```

> Code example:

```js
// don't forget to require the module!
const simplylogger = require("simply-logger");

// creates the logger
const myLogger = new simplylogger.Logger("MyLogger", "Europe/Paris", 24, "./some/path", true); //change 24 to 12 for AM/PM

/* examples */

// Example info
myLogger.info("An info!");

// Example warn
myLogger.warn("A warn...");

// Example error
myLogger.error("Oh sh*t... an error...");
```
> <img src="https://cdn.discordapp.com/attachments/670181225477963776/955521229983481877/unknown.png"/>
## Additionnal Informations

> This package is under GNU Public Licence 3.0.
> Use the packages as your wishes.
> If you find any bugs, please repport them at https://github.com/TheDogHusky/simply-logger/issues
> A suggestion? Send me an email or open an issue with the suggestion label!
> WE ARE NOT RESPONSIBLE FOR WHAT YOU DO WITH THE PACKAGE!