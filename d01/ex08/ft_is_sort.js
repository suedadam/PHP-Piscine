#!/usr/local/bin/node

function ft_is_sort(array)
{
	var itt = array.entries();
	var i = 0;

	if (array.length < 2) {
		console.log(array.length);
		return false;
	}
	for (let e of itt) {
		console.log(e.value);
	}
	// while (i < array.length)
	// {
	// 	if (itt.next().value.toString().localeCompare(itt.value) == -1) {
	// 		return false;
	// 	}
	// 	else {
	// 		console.log("Passed")
	// 	}
	// 	i++;
	// }
	return true;
}

process.argv.shift();
process.argv.shift();
console.log(ft_is_sort(process.argv))