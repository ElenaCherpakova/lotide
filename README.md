# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function (head)`: retrieves the first element from the array
* `function (tail)`: retrieves every element except the first element of the array
* `function (middle)`: returns the middle element of an array
* `function (assertArraysEqual)`: asserts if two arrays are equals
* `function (assertEqual)`: asserts if two values are equals
* `function (assertObjectsEqual)`: asserts if two objects are equals
* `function (countLetters)`: returns counts of each letter of a string
* `function (countOnly)`: retunrn counts quantity of similar letters in a string
* `function (eqArrays)`: validates equality of arrays
* `function (eqObjects)`: validates equality of objects
* `function (findKey)`: searches for specific key of an object
* `function (findKeyByValue)`: searches for a key on an object where its value matches a given value
* `function (letterPositions)`: returns all the indices in the string where each character is found
* `function (map)`: creates a new array populated with the results of calling a provided function on every element in the calling array
* `function (pigLatin)`: flips the words based on famous logical game pig latin
* `function (reverse)`: reverses any string given
* `function (takeUntil)`: returns a slice of the array with elements taken from the beginning
* `function (without)`: return a subset of a given array, removing unwanted elements.

