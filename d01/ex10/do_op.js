#!/usr/local/bin/node

if (process.argv.length != 5)
{
	console.log("Incorrect Parameters");
	return (-1);
}

function is_numeric(obj) {
    return !isNaN(obj - parseFloat(obj));
}

var op = process.argv[3];
op = op.trim();
var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[4]);
if (!is_numeric(num1) || !is_numeric(num2))
{
	console.log("Incorrect Parameters");
	return (-1);	
}
if (op == '+')
	console.log(num1 + num2);
else if (op == '-')
	console.log(num1 - num2);
else if (op == '*')
	console.log(num1 * num2);
else if (op == '/')
	console.log(num1 / num2);
else if (op == '%')
	console.log(num1 % num2);
else
{
	console.log("Incorrect Parameters");
	return (-1);
}