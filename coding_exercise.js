// 1. Write a function to find the sum of the elements inside the array

const sumArray = [1,10,40];
let sum = 0;
function sumOfElements(){
    for (let i=0; i < sumArray.length; i++){
        sum += sumArray[i];
    }
    console.log(sum)
}
sumOfElements();

// 2. Using a function for loop print all even numbers up to n (parameter in function);

function printEven(n){
    for (let i = 1; i <= n; i++){
        if (i%2 === 0){
            console.log(i)
        }
    }
}
printEven(10);

// 3. Write a function take a string as a parameter, Check if a string contains the letter “y”. If yes print "YES" and only one time.
    // For example - "Crayzy" "Yes"

    function letterY(para = ""){
        if (para.includes("y") || para.includes("Y")){
            console.log("YES BAIBY!!!!")
        }
        else(){
            console.log("Nope!!")
        }
    }

    letterY("ghakshjgdcy");

// 4. Write a function to find the factorial of a given number n

function factorialize(num) {
    
    if (num < 0) 
          return -1;
      
    
    else if (num == 0) 
        return 1;
      
    
      else {
          return (num * factorialize(num - 1));

factorialize(3);

// 5. // Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F

let average = 0;
function grade(score1 = 0, score2 = 0, score3 = 0, score4 = 0){
    average = (score1 + score2 + score3 + score4)/4 
    if (average > 90){
        console.log("A")
    }
    else if (average <= 90 && average > 70 ){
        console.log("B")
    }
    else if (average <= 70 && average > 50){
        console.log("C")
    }
    else{
        console.log("F")
    }
}

grade(2,2,2,2);

// 6. Write a function which prints the star pattern like that for the given value n

// *
// **
// ***
// ****
// *****
// ******
// *******

function copy(para = 0){

    for(let i = 1; i <= para; i++){
        console.log("*")
    }
}
copy(3);

// 7.

// *
// **
// ***
// ****
// *****
// ******
// *******
// ******
// *****
// ****
// ***
// **
// *

// 8. Write a function to reverse a string

function reverseString(str) {
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    return newString;
}
 
reverseString('hello');
