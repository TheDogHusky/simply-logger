"use-strict";

/**
 * @name Simply-Logger
 * @author ClassyCrafter
 * @version 1.4.38
 * @license GNU-3.0
 */

const chalk = require("chalk");
const moment = require("moment");
const tz = require("moment-timezone");
const fs = require('fs');
const path = require('path');


/**
 * The utils class to use some utility functions
 */
 class Utils {

	/**
	 * 
	 * @param {String} timezone The timezone to verify
	 * @returns Boolean true or false
	 */
	isValidTimeZone(timezone) {
		if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
			throw new Error("Time zones are not available in this environment");
		};
		try {
			Intl.DateTimeFormat(undefined, { timeZone: timezone });
			return true;
		} catch (ex) {
			return false;
		};
	};
}


//let's initialize the logger!
/**
 * The Logger object, represents a Logger.
 */
class Logger {
	/**
	 * 
	 * @param {String} name The name of the Logger. Will be logged as [name]
	 * @param {String} timezone The timezone of the Logger. See https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a for a full list of timezones.
	 * @param {Number} format The hour format of the Logger. It's a Number, put 12 or 24. 12 = AM/PM hour format. 24 = 24hours format.
	 * @param {String} path The path to the directory to create logs in
	 * @param {String} writeLogs If the Logger writes logs in a file
	 * @example const { Logger } = require('simply-logger');
	 * 
	 * const myLogger = new Logger("MyLogger", "Europe/Paris", 24, "./logs");
	 */
	constructor(name, timezone, format = 24, dirpath = null, writeLogs = false) {
		//use ("name", "timezone", "format")
		this.name = name;
		this.timezone = timezone;
		this.format = Number(format); // 12 or 24
		this.dirpath = dirpath;
		this.writeLogs = writeLogs;
		if (!Utils.prototype.isValidTimeZone(String(timezone)))
			throw new Error(`The timezone ${timezone} is invalid.`);
		
		// Let's define some functions!
		this.refreshDates = () => {
			const d = new Date();
			const date24 = moment(d).tz(String(this.timezone)).format("HH:mm:ss"); // 24 hour format
			const date12 = moment(d).tz(String(this.timezone)).format("hh:mm:ss A"); // 12 hour format

			let date = date24;

			if (this.format === 12) date = date12;
			if (this.format === 24) date = date24;

			this.date = date;
		};
		/**
		 * 
		 * @param {String} formattedMessage The formatted message to write in the logs
		 */
		this.writeFile = (formattedMessage) => {
			fs.appendFile(this.filepath, formattedMessage + '\n', (err) => {
				if (err) {
					throw new Error(err);
				};
			});
		};

		this.refreshDates();
		if(this.writeLogs === false) return;
		if(this.dirpath === null) return;
		if(!fs.existsSync(this.dirpath)) throw new Error("The specified path does not exists.");
		this.filepath = path.join(this.dirpath, `${this.name}.log`);
	}
	/**
	 * 
	 * @param {String} text The text to log as an info.
	 */
	info(text) {
		this.refreshDates();
		console.log(
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.green("Info")} ${chalk.gray("▪")} ${chalk.greenBright(text)}`
		);
		if(this.writeLogs === false) return;
		const formattedMessage = `${this.date} - [${this.name}] Info ▪ ${text}`;
		this.writeFile(formattedMessage);
	}
	/**
	 * 
	 * @param {String} text The text to log as a warn.
	 */
	warn(text) {
		this.refreshDates();
		console.log(
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.yellow("Warn")} ${chalk.gray("▪")} ${chalk.yellowBright(text)}`
		);
		if(this.writeLogs === false) return;
		const formattedMessage = `${this.date} - [${this.name}] Warn ▪ ${text}`;
		this.writeFile(formattedMessage);
	}
	/**
	 * 
	 * @param {String} text The text to log as an error.
	 */
	error(text) {
		this.refreshDates();
		console.log(
			`${chalk.cyan(this.date)}${chalk.gray(` - `)}${chalk.blue("[")}${chalk.cyanBright(`${this.name}`)}${chalk.blue("]")} ${chalk.red("Error")} ${chalk.gray("▪")} ${chalk.redBright(text)}`
		);
		if(this.writeLogs === false) return;
		const formattedMessage = `${this.date} - [${this.name}] Error ▪ ${text}`;
		this.writeFile(formattedMessage);
	}
	/**
	 * 
	 * @param {String} text The text to log without colors.
	 */
	noColorsInfo(text) {
		this.refreshDates();
		console.log(`${this.date} - [${this.name}] Info ▪ ${text}`);
		if(this.writeLogs === false) return;
		const formattedMessage = `${this.date} - [${this.name}] Info ▪ ${text}`;
		this.writeFile(formattedMessage);
	}
	/**
	 * 
	 * @param {String} text The text to log without colors.
	 */
	 noColorsWarn(text) {
		this.refreshDates();
		console.log(`${this.date} - [${this.name}] Warn ▪ ${text}`);
		if(this.writeLogs === false) return;
		const formattedMessage = `${this.date} - [${this.name}] Warn ▪ ${text}`;
		this.writeFile(formattedMessage);
	}
	/**
	 * 
	 * @param {String} text The text to log without colors.
	 */
	 noColorsError(text) {
		this.refreshDates();
		console.log(`${this.date} - [${this.name}] Error ▪ ${text}`);
		if(this.writeLogs === false) return;
		const formattedMessage = `${this.date} - [${this.name}] Error ▪ ${text}`;
		this.writeFile(formattedMessage);
	}

}


//exporting
module.exports.Logger = Logger;
module.exports.Utils = Utils;