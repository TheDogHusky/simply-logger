'use-strict';

const chalk = require('chalk');
const moment = require('moment');
const tz = require('moment-timezone')

//The valid timezone function
function isValidTimeZone(tz) {
    if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
        throw new Error('Time zones are not available in this environment');
    }

    try {
        Intl.DateTimeFormat(undefined, {timeZone: tz});
        return true;
    }
    catch (ex) {
        return false;
    };
};


//let's initialize the logger!
class Logger {
    constructor(name, timezone) {
        this.name = name;
        this.timezone = timezone;

        if(!isValidTimeZone(String(timezone))) throw new Error(`The timezone ${timezone} is invalid.`);
    }
    
    info(text) {
        var d = new Date();
        var date = moment(d).tz(String(this.timezone)).format("HH:mm:ss");
        console.log(`${chalk.cyan(date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.green("Info")} ${chalk.gray("▪")} ${chalk.greenBright(text)}`);
    }
    
    warn(text) {
        var d = new Date();
        var date = moment(d).tz(String(this.timezone)).format("HH:mm:ss");
        console.log(`${chalk.cyan(date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.yellow("Warn")} ${chalk.gray("▪")} ${chalk.yellowBright(text)}`);
    }
    
    error(text) {
        var d = new Date();
        var date = moment(d).tz(String(this.timezone)).format("HH:mm:ss");
        console.log(`${chalk.cyan(date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.red("Error")} ${chalk.gray("▪")} ${chalk.redBright(text)}`);
    }
};

//exporting
module.exports.Logger = Logger;