#!/usr/bin/php
<?php
	$stdin = fopen('php://stdin', 'r');
	while (1)
	{
		echo "Enter a number: ";
		$line = trim(fgets(STDIN));
		if (is_numeric($line))
		{
			if ($line % 2 == 0)
				echo "The number ".$line." is even\n";
			else
				echo "The number ".$line." is odd\n";
		}
		else
		{
			echo "'".$line."' is not a number\n";
		}
	}
?>