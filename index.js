"use-strict";

/**
 * @name Simply-Logger
 * @author ClassyCrafter
 * @version 0.3.25
 * @license GNU-3.0
 */

const chalk = require("chalk");
const moment = require("moment");
const tz = require("moment-timezone");

//The valid timezone function
function isValidTimeZone(tz) {
	if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
		throw new Error("Time zones are not available in this environment");
	}
	try {
		Intl.DateTimeFormat(undefined, { timeZone: tz });
		return true;
	} catch (ex) {
		return false;
	}
}

//let's initialize the logger!
/**
 * The Logger object, represents a Logger.
 */
class Logger {
	/**
	 * 
	 * @param {String} name The name of the Logger. Will be logged as [<name>]
	 * @param {String} timezone The timezone of the Logger. See https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a for a full list of timezones.
	 * @param {Number} format The hour format of the Logger. It's a Number, put 12 or 24. 12 = AM/PM hour format. 24 = 24hours format.
	 * @example
	 * const { Logger } = require('simply-logger');
	 * 
	 * const myLogger = new Logger("MyLogger", "Europe/Paris", 24);
	 */
	constructor(name, timezone, format = 24) {
		//use ("name", "timezone", "format")
		this.name = name;
		this.timezone = timezone;
		this.format = Number(format); // 12 or 24

		if (!isValidTimeZone(String(timezone)))
			throw new Error(`The timezone ${timezone} is invalid.`);
		var d = new Date();
		var date24 = moment(d).tz(String(this.timezone)).format("HH:mm:ss"); // 24 hour format
		var date12 = moment(d).tz(String(this.timezone)).format("hh:mm:ss A"); // 12 hour format

		let date = date24;

		if (this.format === 12) date = date12;
		if (this.format === 24) date = date24;

		this.date = date;
	}
	/**
	 * 
	 * @param {String} text The text to log as an info.
	 */
	info(text) {
		console.log(
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.green("Info")} ${chalk.gray("▪")} ${chalk.greenBright(text)}`
		);
	}
	/**
	 * 
	 * @param {String} text The text to log as a warn.
	 */
	warn(text) {
		console.log(
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.yellow("Warn")} ${chalk.gray("▪")} ${chalk.yellowBright(text)}`
		);
	}
	/**
	 * 
	 * @param {String} text The text to log as an error.
	 */
	error(text) {
		console.log(
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.red("Error")} ${chalk.gray("▪")} ${chalk.redBright(text)}`
		);
	}
}

//exporting
module.exports.Logger = Logger;
