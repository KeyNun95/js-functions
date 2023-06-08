// 1.
//Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
//Define and code the functions below.
//Define the functions using the approach as specified (either as a function expression or declaration).
//Be sure to number each function with a comment above it.
//After each function, call it at least once and console.log the results.
//For example, here's the first function, our gift to you:

function maxOfTwoNumbers(x, y){
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
//Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThree(x, y, z){
    if (x >= y && x >= z) {
        return x;
    } else if (y >= z && y >= x) {
        return y;
    } else {
        return z;
    }
}

    console.log(maxOfThree(3, 9, 10));

//3.
//Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(letter){
  if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || letter === 'y'){
    return true;
  }
  return false;
}

console.log(isCharAVowel('o'));
console.log(isCharAVowel('z'));

//4.
//Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function(nums){
  let sum = 0;
  for(let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  return sum;
}

console.log(sumArray([8,2,6]));

//5.
//Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(product){
  let multiply = 1;
  for(let i = 0; i < product.length; i++){
    multiply *= product[i];
  }
  return multiply;
}

console.log(multiplyArray([6,9,2]));

//6.
//Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function(){
  return arguments.length
}

console.log(numArgs('1', '2', '3', '4'));

//7.
//Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(string){
  let splitWord = string.split('');
  let reverseWord = splitWord.reverse();
  let joinWord = reverseWord.join('');
  return joinWord
}

console.log(reverseString('rockstar'));

//8.
//Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(wordsArray){
  let longest = 0;
  wordsArray.forEach(function(word){
    if(word.length > longest){
      longest = word.length
    }
  })
  return longest;
}

console.log(longestStringInArray(["pickle", "buns", "patty", "ketchup"]));

//9.
//Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(arrayWords, num){
  let longer = [];
  for(let i = 0; i < arrayWords.length; i++){
    if(arrayWords[i].length > num){
      longer.push(arrayWords[i]);
    }
  }
  return longer;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
