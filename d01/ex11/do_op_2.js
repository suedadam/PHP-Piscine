#!/usr/local/bin/node

if (process.argv.length != 3)
{
	console.log("Incorrect Parameters");
	return (-1);
}

function is_numeric(obj) {
    return !isNaN(obj - parseFloat(obj));
}

function OpStack(splitted, operator)
{
	this.operator = operator;
	this.numbers = splitted.map(x => parseInt(x));
}

function parse_operation(str) {
	var op;
	var x;
	var newstring = "";

	x = 0;
	for (var i = 0; str[i]; i++) {
		if (str[i] != ' ')
		{
			if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/' || str[i] == '%')
				op = str[i];
			else if (str[i] < '0' || str[i] > '9')
				return (-1);
			newstring = newstring.concat(str[i]);
		}
	}
	var returnStruct = new OpStack(newstring.split(op), op);
	return (returnStruct);
}

var op_storage = parse_operation(process.argv[2]);
if (!op_storage.operator || op_storage.numbers.length != 2 || !op_storage.numbers[0] || !op_storage.numbers[1])
{
	console.log("Syntax Error");
	return (-1);
}
if (op_storage.operator == '+')
	console.log(op_storage.numbers[0] + op_storage.numbers[1]);
else if (op_storage.operator == '-')
	console.log(op_storage.numbers[0] - op_storage.numbers[1]);
else if (op_storage.operator == '*')
	console.log(op_storage.numbers[0] * op_storage.numbers[1]);
else if (op_storage.operator == '/')
	console.log(op_storage.numbers[0] / op_storage.numbers[1]);
else if (op_storage.operator == '%')
	console.log(op_storage.numbers[0] % op_storage.numbers[1]);
else
{
	console.log("Syntax Error");
	return (-1);
}