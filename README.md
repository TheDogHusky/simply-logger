# Simply-Logger

> A simple logger using Chalk 4.1.0 and Moment.

## Utilisation & Example

> To install it, run the following command:

```batch
npm i simply-logger
```

> Update

```js
const myLogger = new simplylogger.Logger("MyLogger", "Europe/Paris");
//to
const myLogger = new simplylogger.Logger("MyLogger", "Europe/Paris", 12); //12 or 24  12 = Am/ PM 24 = 24 hour clock
```

> Code example:

```js
// don't forget to require the module!
const simplylogger = require("simply-logger");

// creates the logger
const myLogger = new simplylogger.Logger("MyLogger", "Europe/Paris", 24); //change 24 to 12 for AM/PM

/* examples */

// Example info
myLogger.info("An info!");

// Example warn
myLogger.warn("A warn...");

// Example error
myLogger.error("Oh sh*t... an error...");
```

## Additionnal Informations

> This package is under GNU Public Licence 3.0.
> Use the packages as your wishes.
> If you find any bugs, please repport them at https://github.com/TheDogHusky/simply-logger/issues
> A suggestion? Send me an email or open an issue with the suggestion label!
