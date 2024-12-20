

// Number 01 ....
// Problem Solving 
// Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let a = parseFloat(prompt("Please Enter First Number : "));
let b = parseFloat(prompt("Please Enter Second Number : "));

if (isNaN(a) || isNaN(b)) {
    document.write("Your Entered Invalid Input");
} else if (a > b) {
    document.write("max of " + a +" " + b + " is : +a");
} else {
    document.write("Max of " + a +" " + b + " is : " +b);
}


// Number 02 ......
// Problem Solving 
// Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition) 

if(value > 0){
    res = '${value} is Positive Number'; 
}
else if(value < 0){
    res = '${value} is Negative Number'; 
}
else if(value == 0){
    res = '${value} is Zero'; 
}else{
    res = '${value} is Not A Number';
}

// Number 04....
//result in a variable and print “Even Number” or “Odd Number”.


let number = 5

let remainder = (number % 2)

if (remainder == 0){
    console.log('${number} is even')
}else{
    console.log('${number} is odd')
}


// Number 05....
// Solve the problem with Javascript  to check whether a character is in the alphabet or not.

// package allProgram;

// public class CheckAlphabet {
//     public static void man(String[] args) {
//         char c='@';
//         if( (c>= 'a' && c <= 'z') || (c>= 'A' && c<= 'Z')) {
//             System.out.printIn(c +"is an alphabet");
//         }else {
//          System.out.printIn(c +" is not an alphabet");
    
//         if(Character.isAlphabetic(c))
//         {
//             System.out.printIn(c +" is an alphabet");
//         }else {
//             System.out.printIn(c +" is not an alphabet");
//         }
//     }
// }