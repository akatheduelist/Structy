Write a method, maxValue, that takes in an array of numbers as an argument. The method should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.

test_00

double[] numbers = { 4, 7, 2, 8, 10, 9 };
Source.maxValue(numbers); // -> 10

test_01

double[] numbers = { 10, 5, 40, 40.3 };
Source.maxValue(numbers); // -> 40.3

test_02

double[] numbers = { -5, -2, -1, -11 };
Source.maxValue(numbers); // -> -1

test_03

double[] numbers = { 42 };
Source.maxValue(numbers); // -> 42

test_04

double[] numbers = { 1000, 8 };
Source.maxValue(numbers); // -> 1000

test_05

double[] numbers = { 1000, 8, 9000 };
Source.maxValue(numbers); // -> 9000

test_06

double[] numbers = { 2, 5, 1, 1, 4 };
Source.maxValue(numbers); // -> 5