// to print the string

// console.log("hello world")

// comments
/* multiline comment
check
its working
*/

// uninitialized variable
// var a = 5;
// var z = "hlo";
// c = a + 1
// d = z + " wrd";
// console.log(c , d);

// var san = 2;

// san++;
// console.log(san)

// var a = 10

// a/=3

// console.log(a)

// double string in one string

// var a = " hlo \" wrld \" fine \""
// console.log(a)

// concating string

// var a = "hlw" + " wrd"
// console.log(a)

//concatenating strings with plus and equals

// var a = "first line"
//     a += " second line"
//     console.log(a)

//constructing string with variable

// var myName = "san";

// var myString = " hello, " + myName + " how are you? "

// console.log(myString);

//----------------------
//variable to string

// var myCast = "acharya";
// var myDegree = "be"

// myCast += myDegree

// console.log(myCast);

//------------
// length of the string

// var a = "sanjay"

//  b = a.length
//  console.log(b);

// --------------

// var a = "sanju"

// b = a[2]
// console.log(b)

//  length of the string
// var a = last = "sanj"
// // var lastName = last[last.length-3]

// console.log(last.length);

//  nested array

// var arr = [["san", 23, 24],["bull",264562]]

// console.log(arr);


// array index

// var arr = [1,2,3,4,5,6,7,9]

// var b = arr[2]
// console.log(b);

// var arr = [[1,2,3,4,5,6,7,9] ,[1,2,8]]

// var b = arr[1][2]
// console.log(b);


// shift to remove the 1st array

// var arr = [[1,2,3],[2,3,4]]

// var b = arr.shift();

// console.log(arr);

//  var arr = [[1,2,3],[2,3,4]]

// var b = arr.unshift("san", "jay");

// console.log(arr);

// function of javascript

// function san(){
//     console.log("hi san")
// }
// san();

// passing the values to function with arguement

// function man  (a , b ){
// var c = a + b;
// console.log(c);
// }

// man( 6,5);

// var san = "shirt";
// function sanju(){
//     var  san = "pant"
//     return san;
// }
// console.log(sanju());
// console.log(san)

//  return value from function ny return

// function minus(a){
//     return a -6;
// }
// console.log(minus(10));

// san = function (ll){
//     return ll * 5;
// }
// console.log(san(5));

//  save the returned value
// sanj = 0
// san = function(a,b,c){
//     return  (a+b+c)*2
// }
// sanj = san(2,2,2);

// console.log(sanj)


// stand in line

// function nextLine (arr,item){
//     arr.push(item);
//     return arr.shift();
// }
// var testArr = [1,2,3,4,5];
// console.log("before: " + JSON.stringify(testArr));
// console.log(nextLine(testArr,6));
// console.log("after: " + JSON.stringify(testArr));


// remove 1st array and add the another array in the end

// oarr = [1,2,3,4,5,6]
// function myfun (item,arr){
//     arr.push(item);
//     return arr.shift();
// }

// console.log(oarr);
// console.log(JSON.stringify(myfun(7,oarr)))
// console.log(JSON.stringify(oarr));

// if else with function

// function yesTrue (a){
//     if(a == 10){
//         return "true"
//     }
//     else 
//     return "false"
// }
//     console.log(yesTrue(1));

// function trueFalse (itIsTrue){
//     if(itIsTrue){
//         return "yes, it is true"
//     }
//     else
//     return "no, its false"
// }
// console.log(trueFalse(true));

// function san (val){
//     if(val === 9){
//         return "equal"
//     }
//     else return "not equal"
// }
//     console.log(san(089));

// function grater (val){
//     if(val>100){
//     return "over 100"
// }
// if(val>10){
//     return "over 10"
// }
//  else return "10 or under"
// }

// console.log(grater(11))

// function san (val){
//     if(val <=50 && val >=25){
//         return "yes";
//     }

//     else return "no";
// }
//     console.log(san(45));


// function isOddOrEven (num) {
//     if(num % 2 == 0)
//     return "even"
//     else 
//     return "odd"
// }
// console.log(isOddOrEven(5));


//  OR logical operator

// function san(n){

// if(n<10  ||  n>20){
//     return "outside"
// };
// return "inside";
// }
// console.log(san(25));


// else statement

// function test(val){
//     var result = "";
//     if(val<5){
//     result = "smaller than 5"
// }else 
// result = "bigger than 5"

// return result;
// }
// console.log(test(8));

//  else if 

// function elseif(val){
//    d = "";
//     if(val < 5){
//        d =  "smaller than 5"
//     }else if(val>30){
//        d =  "greater than 30"
//     }else
//    d = "middle of the 10 & 30"
//    return d;
// }

// console.log(elseif(26));

// if else chaning statement
// num < 5 r "tiny"
// num < 10 r "small"
// num < 15 r "medium"
// num < 20 r "large"
// num >= 20 r "huge"
// function chainState(num){
//     if(num < 5 ){
//         return "tiny"
//     }else if (num < 10){
//         return "samall"
//     }else if (num < 15){
//         return "medium"
//     }else if (num < 20){
//         return "large"
//     }else return "huge"
// }

// console.log(chainState(21));


// golf code

//  var names = ["hole", "eagle", birdy]
/* strokes
1
<= par -2
par -1
par
*/
// var names = ["hole", "eagle", "birdy"]

// function golf(par,stroke){
//     if(stroke == 1){
//         return names[0]
//     }else if (stroke <= par -2){
//         return names[1]
//     }else (stroke == par)
//         return names[2]
//     }

// console.log(golf(0,0));

/* switch statement

replacing the if else switch statement is used

1 alpha 
2 gamma
3 beta
*/

// function caseInSwitch (num){
//     answer = "";

//     switch(num){
//     case 1:
//         answer = "alpha";
//     break;
//     case 2:
//         answer = "gamma";
//         break;
//     case 3:
//             answer = "beta";
//             break;
//     }
//     return answer;
    
// }
//     console.log(caseInSwitch(2));

/* default option in switch statement 
like else statement
*/


// function caseInSwitch(num){
//     var answer = "";

//     switch(num){
//         case 1:
//             answer = "buzz";
//         break;
//         case 2:
//             answer = "fixx";
//         break;
    
//     default:
//         answer = "wrong input"
//     }
//       return answer; 
    
// }
//  console.log(caseInSwitch(6));



//   multiple input and one output

// function mult(num){
//     answer = "";
//     switch(num){
//         case 1:
//             case 2:
//                 answer = "low";
//                 break;
//     case 4:
//         case 5:
//             answer = "mid"
//             break;

//             default:
//                 answer = "wrong input";
//             }
//             return answer;
// }
// console.log(mult(3));

//  creating dictionary by switch

// function dictionary (val){
//     result = "";
//     switch (val){
//         case "alpha":
//         return "adam"
//         break;

//         case "bravo":
//         return "buston"
//         break;
//     } 
//     return result;
    
// }
// console.log(dictionary("alpha"));

// //  dictionary using object method


// function dict(val){
//     var result = "";


//    var  lookup = {
//     "alpha": "adam",
//     "san": "sanjay",
//     "dd": "bb",
// };
// result = lookup[val];
// return result;
// }
// console.log(dict("alpha"));

// check the property

// var myObject = {
//     "gift" : "mobile",
//     "cloth": "pant",
// };

// function prop(checkMyprop){
//     if(myObject(checkMyprop)){
//     return myObject[checkMyprop];
// }else {return "no found"
// }
// }
// console.log(prop("gift")); not solved 
//-------------------------------------


//acces the nasted array
// var myStorage = {
//     "car" : {
//         "bike": {
//             "cyclebsa" : {
//             "why" : "always"
//         }
//     }
//     }
// }
// var search = myStorage.car.bike.cyclebsa["why"];
// console.log(search);

//  for loops

// var ourArr = []

// for(i =0; i < 5; i++){
//     ourArr.push(i);
// }
// console.log(ourArr);
    

//  WHILE LOOPS

// var arr = []

// var i = 0;

// while(i < 10){
//     arr.push(i);
//     i++
// }
// console.log(arr);

//  even number using for loops in array

// var arr = []

// for(i =0; i < 10; i=i+2){
//     arr.push(i);
// }
// console.log(arr);

//  odd number using for loops in array

// var san = []
// for(i=1; i < 10; i=i+2){
//     san.push(i);
// }
// console.log(san);

// for loop decrement 

// var myArr = []

// for(i=15; i>0; i--){
//     myArr.push(i)
// }
// console.log(myArr);

//  odd decrement using for loop 

// var odd = []

// for(i=19; i>0; i-=2){
//     odd.push(i);
// }
// console.log(odd);

//  even decrement using for loop

// eve = []

// for(i=10; i>0; i-=2){
//     eve.push(i);
// }console.log(eve);

// var arry = [1,2,3,4,5,6]

// var total = 0

// for(i=0; i<arry.length; i++){
//     total = total+arry[i]
// }
// console.log(total);

// string to integer by using parseInt

// function convertToInteger(str){
//     return parseInt(str,)
// }

// console.log(convertToInteger("5"));

//  convert binary num into integer

// function convertToInt(str){
//         return parseInt(str, 2)
// }
//     console.log(convertToInt("011010"));

//  if else method

// function check(a,b){
//     if (a == b){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(check(1,2));

//  we can write anothe easy method by using ternary method

//  ternary operator

// function checkVal(a,b){
//     return a === b ? true : false;
//     return a === b;
// }
// console.log(checkVal(1,1));

//  multiple ternary operator

// function multyTernary(val){
//     return val > 0 ? "positive" : val < 0 ? "negitive" : false;
// }
// console.log(multyTernary(0));

// reassign the array with const
+
// const s = [1,2,3]

// function mutateArr(){
    "use strict";
//// return
//     s[0] = 3;
//     s[1] = 2;
//     s[2] = 1;
// }
// (mutateArr());
// console.log(s);

// anonymous to arrow function

// san = function () {
//     console.log("hlw")
// }
// san();

// function conacte two array

// function arr (arr1,arr2){
//     return arr1.concat(arr2);
// }
// console.log(arr([5],[6]));

//  function converting to an array 

// san = (arr1,arr2) => arr1.concat(arr2);

// console.log(san([1,3],[6,8]));

