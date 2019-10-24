/*
Q1 check no in even or odd without using conditional statements
*/

// let arr = ["the given no is even", 'given no is odd']
// let input = prompt('enter input', "any number")
// let res = input % 2;
// console.log(arr[res])



/*
Q2 write a program to print input text program in this style below
input =program

output
p * * * * * p
* r * * * r *
* * o * o * *
* * * g * * *
* * r * r * *
* a * * * a *
m * * * * * m
*/

// let input = 'program';
// let inputlength = input.length;

// // Create one dimensional array 
// let myArray = new Array(inputlength);

// // document.write("Creating 2D array <br>");
// // Loop to create 2D array using 1D array
// for (i = 0; i < inputlength; i++) {
//     myArray[i] = new Array(inputlength);
// }

// let j = inputlength - 1;

// // Loop to initilize 2D array elements. 
// for (i = 0; i < inputlength; i++) {
//     while (j >= 0) {
//         // console.log("i,i", i, i)
//         // console.log("i ,j", i, j)
//         myArray[i][i] = input[i];
//         myArray[i][j] = input[i];
//         j--;
//         break;
//     }
// }

// // Loop to display the elements of 2D array.  
// for (i = 0; i < 7; i++) {
//     for (j = 0; j < 7; j++) {
//         if (myArray[i][j] === undefined) {
//             myArray[i][j] = '*'
//         }
//         document.write(myArray[i][j] + " ")
//     }
//     document.write('</br>')
// }



/*
*Q3 program to find factorial of input number
*/

// let number = +prompt("Enter a number to calculate factorial ?")
// let result = 1;
// for (i = number; i > 0; i--) {
//     result = result * i;
// }
// document.write(`the Factorial of ${number} is ${result}`)





/*
* write a program to generate prime no
*/

// let limit = +prompt('Enter the limit on which you want to calculate prime numbers')
// let primeNumbers = []

// for (i = 2; i <= limit; i++) primeNumbers.push(i)

// for (i = 2; i <= limit; i++) {
//     for (j = 2; j <= limit; j++) {
//         if (i !== j && i % j === 0) {
//             // console.log("in if i, j ,i % j ", i, j, i % j)
//             primeNumbers = primeNumbers.filter(item => item !== i);
//         }
//     }
// }

// console.log("prime no", primeNumbers)






/**
 * write a program to take matrix as input and print matrix as output
 */

/**
 * First approach
 */

/**
let rows = +prompt('Enter number of rows')
let cols = +prompt('Enter number of columns')
let matrix = [];

for (i = 0; i < rows; i++) {
    let col = [], e;
    for (j = 0; j < cols; j++) {
        e = prompt("Enter matrix values");
        col.push(e);
        document.write(e, "\t")
    }
    document.writeln('<br/>')
    matrix.push(col)
}

console.log("matrix", matrix)
 */

/**
 * Second approach
 */

/**
let rows = +prompt('Enter number of rows')
let cols = +prompt('Enter number of columns')
let matrix = new Array(rows);


for (i = 0; i < rows; i++) {
  matrix[i] = new Array(cols)
  for (j = 0; j < cols; j++) {
      matrix[i][j] = prompt('Enter matrix values');
      document.write(matrix[i][j] + '\t\t');
  }
  document.writeln("<br/>")
}

console.log("matrix", matrix)
*/














/**
 * write a program to check if a matrix is magix matrix or not
 */

/**
 * magic matrix are those matix who's sum of all individual rows and sum of cols and sum of diagonals are equal
 * e.g below a 3 by 3 matrix it can be or any order like we can take of 5 by 5
 * 8   1   6  => 8 + 1 + 6 = 15
 * 3   5   7  => 3 + 5 + 7 = 15
 * 4   9   2  => 4 + 9 + 2 = 15
 * columns :8+3+4=15,  1+5+9=15,  6+7+2=15
 * diagonals =8+5+2=15, 6+5+4=15
 * all are 15
*/

/**
let rows = +prompt('Enter number of rows')
let cols = +prompt('Enter number of columns')
let matrix = [];

for (i = 0; i < rows; i++) {
    let col = [], e;
    for (j = 0; j < cols; j++) {
        e = +prompt("Enter matrix values");
        col.push(e);
        document.write(e, "\t")
    }
    document.writeln('<br/>')
    matrix.push(col)
}

let sumOfRows = [], sumOfCols = [];

for (i = 0; i < rows; i++) {
    let sumOfRow = 0, sumOfCol = 0;
    for (j = 0; j < cols; j++) {
        sumOfRow = sumOfRow + matrix[i][j]
        sumOfCol = sumOfCol + matrix[j][i]
    }
    sumOfRows.push(sumOfRow);
    sumOfCols.push(sumOfCol);
}

let sumOfDiagonal1 = 0, sumOfDiagonal2 = 0;

for (i = 0; i < rows; i++) {
    sumOfDiagonal1 = sumOfDiagonal1 + matrix[i][i]
    for (j = cols - 1; j >= 0; j--) {
        sumOfDiagonal2 = sumOfDiagonal2 + matrix[i][j];
        break;
    }
}

sumOfRows.sort();

let FilterSumOfRows = [...sumOfRows];
let FilterSumOfCols = [...sumOfCols];

for (let i = 0; i < sumOfRows.length; i++) {
    if (sumOfRows[i] === sumOfRows[i + 1]) FilterSumOfRows.splice(i, 1)
    if (sumOfCols[i] === sumOfCols[i + 1]) FilterSumOfCols.splice(i, 1)
}

let filterSumofDiagonal = sumOfDiagonal1 === sumOfDiagonal2 ? sumOfDiagonal1 : null


// console.log("sumOfRows", sumOfRows);
console.log('FilterSumOfRows', FilterSumOfRows)
console.log('*****************************')
// console.log("sumOfCols", sumOfCols);
console.log('FilterSumOfCols', FilterSumOfCols)
console.log('*****************************')
// console.log("sumOfDiagonal1", sumOfDiagonal1);
// console.log("sumOfDiagonal2", sumOfDiagonal2)
console.log("filterSumofDiagonal", filterSumofDiagonal)

if (Boolean(filterSumofDiagonal) && FilterSumOfRows.length === 1 && FilterSumOfCols.length === 1 && (filterSumofDiagonal === FilterSumOfRows[0]) && (filterSumofDiagonal === FilterSumOfCols[0])) {
    console.log("Yuppy! It is a magic matrix")
} else {
    console.log('Is is not magic matrix')
}
 */




/**
 * muliplicaion of number upto 12
 */
/**
let n = +prompt('Enter the number for which you want table')
for (i = 1; i < 13; i++) {
    let result = n * i;
    document.write(`${n} * ${i} = ${result} <br/>`)
}
 */



/**
 * program to find the next 20 leap year
 */

/**
let next20LeapYears = [], counter = 0;
document.write('these are the next 20 leap years <br/><br/>')
for (i = 2019; i <= 2099; i++) {
    if (i % 4 === 0) {
        next20LeapYears.push(i);
        document.write(next20LeapYears[counter],'<br/>');
        counter++;
    }
}
 */





/**
  Fibonacci series
  a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
  The simplest is the series 1, 1, 2, 3, 5, 8, etc.
 */

/**
let last = 0, secLast = 1;
let fibonacciSeries = [];

for (i = 0; i < 20; i++) {
   let result = last + secLast;
   fibonacciSeries.push(result)
   secLast = last;
   last = result;
}

console.log("fibonacciSeries", fibonacciSeries)
*/



/**
 * sort a list
 */

/**
let listLength = +prompt("Enter the length of list you want to enter");
let list = [];

for (let index = 0; index < listLength; index++) {
   list.push(+prompt("Enter list values"))
}
document.write("list you entered  ", '<br/>', '<br/>', list, '<br/>', '<br/>')

// let list = [1, 9, 7, 8, 6, 5, 4];
let temp;

//here we take iterate to array.length-1 because here in if we check list[i+1] in list with index+1 value so
// that if we  iterate to list.length it won't find "last" i+1 val and give error
for (j = 0; j < list.length - 1; j++) {
   for (i = 0; i < list.length - 1; i++) {
       if (list[i] > list[i + 1]) {
           temp = list[i];
           list[i] = list[i + 1];
           list[i + 1] = temp;
       }
   }
}

document.write("Sorted list in ascending order   <br/> <br/> ", list)
*/





/**
 * find out the largest number from the list
//   * e.g list=[22,32,1,4,60,80,56];
 */

/**
 let listLength = +prompt("Enter the length of list you want to enter");
let list = [];

for (let index = 0; index < listLength; index++) {
    list.push(+prompt("Enter list values"))
}
document.write("list you entered  ", '<br/>', '<br/>', list, '<br/>', '<br/>')
let highestNo = list[0];

for (let i = 0; i < list.length; i++) {
    (list[i] > highestNo) ? highestNo = list[i] : null
}
document.write('highestNo  = ', highestNo)
 */





/**
 * reverse a list
 */

/**
let listLength = +prompt("Enter the length of list you want to enter");
let list = [];

for (let index = 0; index < listLength; index++) {
   list.push(+prompt("Enter list values"))
}
document.write("list you entered  ", '<br/>', '<br/>', list, '<br/>', '<br/>')

// let list = [1, 9, 7, 8, 6, 5, 4];
let temp;

//here we take iterate to array.length-1 because here in if we check list[i+1] in list with index+1 value so
// that if we  iterate to list.length it won't find "last" i+1 val and give error
for (j = 0; j < list.length - 1; j++) {
   for (i = 0; i < list.length - 1; i++) {
       if (list[i] < list[i + 1]) {
           temp = list[i];
           list[i] = list[i + 1];
           list[i + 1] = temp;
       }
   }
}

document.write("Sorted list in descending order   <br/> <br/> ", list)
*/


/**
 * swap a 2 variable values without using temp variable
 */
/**
let a = 15, b = 30, arr = [];
document.write(`a = ${a} , b = ${b} <br/> <br/>`);
arr.push(a);
arr.push(b);
a = arr.pop();
b = arr.pop();
document.write('After swap <br/> <br/>')
document.write(`a = ${a} , b = ${b} <br/>`);
 */



/**
 * Hoisting concept
 */
 
//  let a=10;
//  const b=20;
//  var c=30;

//  console.log(window.a); //undefined
//  console.log(window.b);  //undefined
//  console.log(window.c);  //30 
