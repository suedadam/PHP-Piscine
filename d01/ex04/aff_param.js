#!/usr/local/bin/node

if (process.argv.length <= 2) {
	process.exit(0);
}

var param = process.argv[2]

console.log(param);