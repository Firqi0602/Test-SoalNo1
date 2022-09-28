Feature: Check string palindrome or not

	Scenario Outline: Check string palindrome
		Given Input string <input>
		When Check palindrome
		Then Validasi palindrome<output>
		Examples:
			| input		| output	|
			| "makan"	| "false" |
			| "makam"	| "true" |
			| "taat"	| "true" |
			| "apple"	| "false" |  