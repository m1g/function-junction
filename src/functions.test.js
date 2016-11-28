/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

const max = (a, b) => {
  if (a > b) {
    return a
  } else {
    return b
  }
}

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

const maxOfThree = (a, b, c) => {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

const sum = (a, b) => {
  return a + b
}

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

const sumOfArray = (myArray) => {
  let total = 0
  for (let i = 0; i < myArray.length; i++) {
    total += myArray[i]
  }
  return total
}

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

const isVowel = (myVowel) => {
  let myArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] === myVowel) {
      return true
    }
  }
  return false
}
 /**
  * Write a function rovarspraket() that will translate
  * a text into a "rövarspråket". That is, double every
  * consonant and place an occurrence of "o" in between.
  *
  * For example, rovarspraket("this is fun") should
  * return the string "tothohisos isos fofunon".
  */

const rovarspraket = (str) => {
  const splitStr = str.split('')
  for (var i = 0; i < splitStr.length; i++) {
    if (!isVowel(splitStr[i])) {
      splitStr[i] = splitStr[i] + 'o' + splitStr[i]
    }
  }
  return splitStr.join('')
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

const reverse = (str) => {
  const splitStr = str.split('')
  const reverseStr = splitStr.reverse('')
  const joinStr = reverseStr.join('')

  return joinStr
}

 /**
  * Write a function findLongestWord() that takes an
  * string returns the first, longest word in the array.
  *
  * i.e. findLongestWord("book dogs") should return "book"
  */

/***********************
STACK OVERFLOW SOLUTION
***********************/
// credit: Marco Bonelli
// http://stackoverflow.com/questions/17386774/javascript-find-longest-word-in-a-string

const findLongestWord = (string) => {
  const splitWord = string.split(' ')
  let longestWord = 0
  let word = null
  for (let i = 0; i < splitWord.length; i++) {
    if (longestWord < splitWord[i].length) {
      longestWord = splitWord[i].length
      word = splitWord[i]
    }
  }
  return word
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
