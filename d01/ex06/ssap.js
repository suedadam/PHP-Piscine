#!/usr/local/bin/node

if (process.argv.length <= 2) {
	process.exit(0);
}
var words = [];
var i;
i = 2;
while (i < process.argv.length)
{
	var arg = process.argv[i];
	var results = arg.split(" ");
	results = results.filter(function(a){return a !== ''})
	words = words.concat(results);
	i++;
}
words.sort();
i = 0;
while (i < words.length)
{
	console.log(words[i]);
	i++;
}