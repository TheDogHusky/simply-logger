"use-strict";

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
class Logger {
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

	info(text) {
		console.log(

			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.green("Info")} ${chalk.gray("▪")} ${chalk.greenBright(text)}`
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue(
				"["
			)}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.green(
				"Info"
			)} ${chalk.gray("▪")} ${chalk.greenBright(text)}`

		);
	}

	warn(text) {
		console.log(
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.yellow("Warn")} ${chalk.gray("▪")} ${chalk.yellowBright(text)}`
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue(
				"["
			)}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.yellow(
				"Warn"
			)} ${chalk.gray("▪")} ${chalk.yellowBright(text)}`
		);
	}

	error(text) {
		console.log(
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.red("Error")} ${chalk.gray("▪")} ${chalk.redBright(text)}`
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue(
				"["
			)}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.red(
				"Error"
			)} ${chalk.gray("▪")} ${chalk.redBright(text)}`
		);
	}
}

//exporting
module.exports.Logger = Logger;
