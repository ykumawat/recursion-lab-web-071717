// Code your solution here!

function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  console.log(myString[0]);
  if (myString.length === 1) {
    return myString
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(myString) {
  if (myString.length === 1) {
    return true
  } else {
    if(myString[myString.length - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, myString.length - 1))
    } else {
      return false
    }
  }
}

function addUpTo(myArray, index) {
  if (index === 0) {
    return myArray[0]
  } else {
    return myArray[index] + addUpTo(myArray, index - 1)
  }
}

function maxOf(myArray) {
  if( myArray.length > 1 ) {
    if( myArray[0] > myArray[1] ) {
      myArray.splice(0,2, myArray[0])
    } else {
      myArray.splice(0,2, myArray[1])
    }
    return maxOf(myArray)
    }
    return myArray[0]
 }

 function includesNumber(myArray, num) {
   if (myArray.length === 0) {
     return false
   } else if (myArray[0] === num) {
     return true
   } else {
     myArray.shift()
     return includesNumber(myArray, num)
   }
 }
