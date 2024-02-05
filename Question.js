// Array Question 

// Q1. Insert an item into array at specific index in JavaScript ?

//   Ans.   
// let myArray = [1, 2, 3, 5, 6];
// let indexToInsert = 3;


// let itemToInsert = 4;
// myArray.slice(indexToInsert, 0, itemToInsert);
// console.log(myArray);



// Q2.  Remove an element from an array in JavaScript?

// Ans. 
//  let num = [1, 2, 3, 4, 5, ];
// let indexToRemove = 2;
// fruits.splice(indexToRemove, 1);
// console.log(num);



// Q3.   From a new array and remove all the duplicate elements in a JavaScript array?

// function sumNaturalNumbers(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   console.log(sumNaturalNumbers(10));


// Q4.  Replace an item from an array in JavaScript?

// Ans.   
// let originalArray = [1, 2, 2, 3, 4, 4, 5];


// let uniqueArray = Array.from(new Set(originalArray));
// console.log(uniqueArray);


// Q5.   How do you check if an element exists in an array?
   

// let arr = [1, 2, 3, 4, 5];
// console.log(checkElementExists(arr, 3));



// Q6.  How do you swap any two numbers in a given array?


// Ans.           
// let arr = [1, 2, 3, 4, 5];
// let index1 = 2;
// let index2 = 4;
// [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
// console.log(arr);










// String 

// Q1.    Reverse words in a given string ?

// Ans.  
//    function reverseWords(str) {
//     const words = str.split(" ");
//     words.reverse();
//     return words.join(" ");
//   }
 
//   const sentence = "Hello world, how are you?";
//   const reversedSentence = reverseWords(sentence);
//   console.log(reversedSentence);



// Q2.  Write a JavaScript program to calculate the length of a string. 

// Ans.    
   
// let str= "this is a string ";
//  console.log(str.length);


// Q4. Write a JavaScript program to get a string made of the first 2 and the last 2 chars from a given a  string.
//  	Sample String : 'w3resource'
//  	Expected Result : 'w3ce'
//  	Sample String : 'w3' 
//  	Expected Result : 'w3w3'
//  	Sample String : ' w'
//  	Expected Result : Empty String
 

// ans .  
//              let str = prompt("Enter your string: ");


// let result = "";
// if (str.length >= 2) {
//   result = str.substring(0, 2) + str.substring(str.length - 2);
// }
// console.log(result);



// Q5.  Write a JavaScript program to get a string from a given string where all occurrences of its first char   have been changed to '$', except the first char itself.
//  	Sample String : 'restart'
//  	Expected Result : 'resta$t


// let str = "sousnd";
// let firstchar = str[0];
// let i = str[0];
// let secdstr = firstchar + str.slice(1).replace(i,"$");
// console.log(secdstr);







// Q6.    Write a Javascript program to get a single string from two given strings, separated by a space and swap  the first two characters of each string. 
//  	Sample String : 'abc', 'xyz' 
//  	Expected Result : 'xyc abz'


// Ans. 
//  str1 = "abc";
// str2 = "xyz";
// [str1[0], str1[1]] = [str2[0], str2[1]];
// [str2[0], str2[1]] = [str1[0], str1[1]];
// result = str1 + " " + str2;
// console.log(result);




// Q7.    Write a JavaScript program to add 'ing' at the end of a given string (length should be at least 3). If  the given string already ends with 'ing' then add 'ly' instead. If the string length of the given   string is less than 3, leave it unchanged. 
//  	Sample String : 'abc'
//  	Expected Result : 'abcing' 
//  	Sample String : 'string'
//  	Expected Result : 'stringly'


// Ans .  
//         let string = prompt("enter your string");  
// if (string.length >= 3) {


//   if (string.slice(-3) === "ing") {
//     string += "ly";
//   } else {
//     string += "ing";
//   }
// }


// console.log(string);  
  


// //Q8.  Write a Javascript function that takes a list of words and returns the length of the longest one. 

//        let array = ["nshdh", "bhsd", "sgdg", "hdhs"];
// let array2 = 0;
// if (array.length > 0) {
//     array2 = array[0].length;


//     for (let i = 1; i < array.length; i++) {
//         if (array[i].length > array2) {
//             array2 = array[i].length;
//         }
//     }
// }
// console.log(array2);



// // Q9.   Write a JavaScipt program to remove the nth index character from a nonempty string.

        
// function removeCharacter(str, n) {
//     return str.slice(0, n) + str.slice(n + 1);
//   }
 
//   console.log(removeCharacter('hello', 2));













// // Q10.    Write a JavaScript program to change a given string to a new string where the first and last chars  have been exchanged.?

//       let str = prompt('Enter your string');
//   if (str.length <= 1) {
//    console.log(str);
//   }
// else{
//   str = str.charAt(str.length - 1) + str.slice(1, -1) + str.charAt(0);
//   console.log(str);
// }
  



// // Nested For Loop


// //Q1.

// for (let i = 1; i <= 5; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += j + ' ';
//   }
//   console.log(row);
// }


// //Q2  

// for (let i = 1; i <= 5; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row +=  i+ ' ';
//   }
//   console.log(row);
// }




// //Q3 

// for (let i = 5; i <= 5; i--) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row +=  j+ ' ';
//   }
//   console.log(row);
// }



// //Q4  
     
//   for (let i = 5; i <= 5; i--) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row +=  i+ ' ';
//   }
//   console.log(row);
// }




// //Q5 
          

// Ans 
// const n = 5;
// let str = '';
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let k= 1; k <= 2 * i - 1; k++) {
//         row += k;
//     }
//     str += row + '\n';
// }
// console.log(str);


          



// //Q6    	




// let num = 1;
// for (let i = 1; i <= 4; i++) {
//   let row = '';
//   for (let j = 1; j <= i; j++) {
//     row += num + ' ';
//     num++;
//   }
//   console.log(row);
// }





// //Q7 


//   let n = 5;
// let string = "";


// for(let i = 0; i < n; i++) {
//   for(let j = 0; j < n; j++) {
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
 
//   string += "\n";
// }


// console.log(string);


// Q8
