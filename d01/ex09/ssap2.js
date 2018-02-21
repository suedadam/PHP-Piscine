#!/usr/local/bin/node

function is_alphabetic(str) {
	return /^[a-zA-Z()]+$/.test(str);
}

function is_numeric(obj) {
    return !isNaN(obj - parseFloat(obj));
}

if (process.argv.length <= 2) {
	process.exit(0);
}
// console.log("Length = " + process.argv.length)
var words = [];
var numbers = [];
var other = [];
var i;
i = 2;
while (i < process.argv.length)
{
	var arg = process.argv[i];
	var results = arg.split(" ");
	results = results.filter(function(a){return a !== ''})
	for (var x = results.length - 1; x >= 0; x--) { 
		if (is_numeric(results[x]))
			numbers = numbers.concat(results[x]);
		else if (is_alphabetic(results[x]))
			words = words.concat(results[x]);
		else
			other = other.concat(results[x]);
	}
	// words = words.concat(results);
	console.log("Handled " + results);
	i++;
}
words.sort(function (a, b) {
	return a.toLowerCase().localeCompare(b.toLowerCase());
});
words = words.concat(numbers.sort());
words = words.concat(other.sort());
i = 0;
while (i < words.length)
{
	console.log(words[i]);
	i++;
}