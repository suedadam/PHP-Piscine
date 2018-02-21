#!/usr/local/bin/node

if (process.argv.length <= 3)
	return (0);
var search = new Object();
var tmp;
var fetch = process.argv[2];

for (var i = 3; i < process.argv.length; i++) {
	tmp = process.argv[i].split(":");
	search[tmp[0]] = tmp[1];
}
if (search[fetch])
	console.log(search[fetch]);