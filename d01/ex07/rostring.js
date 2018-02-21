#!/usr/local/bin/node

if (process.argv.length <= 2) {
	process.exit(0);
}

var arg = process.argv[2];
var word = arg.split(' ');
word = word.filter(function(a){return a !== ''});
var removed = word.splice(0, 1);
word.splice(word.length, 0, removed[0]);
console.log(word.join(" "));