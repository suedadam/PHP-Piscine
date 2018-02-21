#!/usr/local/bin/node

function ft_is_sort(array)
{
	var itt = array.entries();

	if (array.length < 2) {
		return true;
	}
	for (var i = array.length - 1; i >= 0; i--) {
		if (array[i].localeCompare(array[i + 1]) == 1)
			return false;
	}
	return true;
}

// var arr = ["!/@#;^", "42", "Hello World", "hi", "zZzZzZz"];
// if (ft_is_sort(arr))
// 	console.log("The array is sorted");
// else
// 	console.log("The array is not sorted");