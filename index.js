// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log('Is a an array?: '+Array.isArray(a)); // a is not an array
console.log('Is b an array?: '+Array.isArray(b)); // b is an array

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
console.log('Multiply each value [1, 2, 3, 4, 5] by 2');
a.forEach(multiplyByTwo);
function multiplyByTwo(item){
    console.log(item*2);
}

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log('Write the program, according to the following requirements output results');
console.log('case 1: '+colors.join(' '));
console.log('case 2: '+colors.join('+'));
console.log('case 3: '+colors.join());

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
//a=a.sort();
console.log('Write a program to sort the Numbers in the following array from largest to smallest');
var sortedArray = new Float64Array(a);
sortedArray = sortedArray.sort().reverse();
console.log(sortedArray);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
console.log('Program to find the most frequent element in the following array:');
var mostFrequent = a.sort((firstVal,secVal) => 
    a.filter(value => value === firstVal).length - a.filter(value => value === secVal).length).pop();
console.log(mostFrequent);