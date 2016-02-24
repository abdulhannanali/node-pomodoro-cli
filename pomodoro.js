var readline = require("readline-sync")
var asciify = require("asciify")

var hours = parseInt(readline.question("Enter the hours: ")) || 0
var minutes = parseInt(readline.question("Enter the minutes: ")) || 0
var seconds = parseInt(readline.question("Enter the seconds: ")) || 0

var totalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds



var pomodoroInterval = setTimeout(function () {
		asciify(`Timeout`, {font: "stop"}, function (error, text1) {
			if (!error) {
				asciify(`${hours}:${minutes}:${seconds}`, {font: "stop"}, function (error, text2) {
					if (!error) {
						console.log(text1)
						console.log(text2)
					}
				})
			}
		})
}, totalSeconds * 1000)