// Part 1: Refactoring Old Code

// When code is outdated or inefficient, it often goes through a process called “refactoring.”
// Refactoring code is the process of restructuring that code without changing its original behavior.
// For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a
// script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your
// approach to this problem? Take a few minutes to examine and refactor the code before continuing.
// For reference, ALAB 308.3.1 is embedded below. The section on CSV parsing is “Part 3.”







// 308.3.1 Part 3: Feeling Loopy
let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
let cell = [];
let row= [];
let cellIndicator = 0;
for (const i in str){
// Store each “cell” of data in a variable.

// When you encounter a comma, move to the next cell.
    if (str[i] === ','){
        cell[cellIndicator] = cell[cellIndicator] + '\t';
        cellIndicator++;
        continue;
    }
// When you encounter the “\n” sequence, move to the next “row.”
    if (str[i] === '\n'){
        console.log(cell[0],cell[1],cell[2],cell[3]);
        cellIndicator=0;
        cell = [];
        continue;
    }
    if (cell[cellIndicator]){
    cell[cellIndicator] = cell[cellIndicator] + str[i];
    }else{
        cell[cellIndicator] = str[i];
    }
    
}  



//Part 2

const testData =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

const csv =
  'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';


let row = testData.split('\n');

const table = [];

row.forEach((r) => {
    let rowData = r.split(',');
    table.push(rowData);
});

console.log(table);

//Part 3
// For each row of data in the result array produced by your code above,
// create an object where the key of each value is the heading for that value’s column.
const title = table.shift();
// Convert these keys to all lowercase letters for consistency.
const keys = [];
title.forEach(title => {
    const key = title.toLowerCase();
    keys.push(key);
});

const people = [];
table.forEach(row => {
    const person = {};
    for (let i = 0; i < row.length; i++){
        person[keys[i]] = row[i];
    }
    people.push(person);
});
console.log(people)


// Part 4: Sorting and Manipulating Data
// It is important to know how to work with data in this format, an array of objects,
// as it is one of the most commonly used data formats in JavaScript.
// Using array methods, accomplish the following tasks, in order upon the result of Part 3:

// Remove the last element from the sorted array.
people.pop();
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
people.splice(1,0,({ id: "48", name: "Barry", occupation: "Runner", age: "25" }));
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
people.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(people);
//  Finally, use the values of each object within the array and the array’s length property to calculate the
// average age of the group. This calculation should be accomplished using a loop.
let averageAge = 0;
people.forEach(person => {
    averageAge += Number(person.age);
});
averageAge /= people.length;
console.log(averageAge);



// Part 5: Full Circle
// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!
// Once complete, be sure to submit your work according to the submission instructions
// at the beginning of this document.

const row1 = Object.keys(people[0]);
let convertToCSV = row1.join(',');
convertToCSV += (`\\n`);

people.forEach(person => {
    for (let i = 0; i < row1.length; i++){
        if (i === row1.length - 1){
            convertToCSV += (`${person[row1[i]]}\\n`)
        }else {
            convertToCSV += (`${person[row1[i]]},`)
        }
    }
});
console.log(convertToCSV.slice(0, -2));








































// misc code


// PART 3: FEELING LOOPY


// for (i = 0; i < csv.length; i++) {
//   // ADDS THE LETTER TO THE WORD(CELL)
//   if (csv[i] != ',') {
//     cell += csv[i];
//   }

//   if (csv[i] === ',') {
//     // ONCE IT ENCOUNTERS A COMMA IT ADDS THE WORD(CELL) TO THE ROW
//     // THEN IT CLEARS THE CELL VARIABLE SO IT CAN BUILD THE NEXT WORD(CELL)
//     // console.log('CELL ', cell);
//     row += `${cell} `;
//     cell = '';
//   }

//   if (csv[i] === '\n') {
//     // ONCE IT ENCOUNTERS A LINE BREAK, IT ADDS THE FINAL WORD(CELL) TO THE ROW AND PRINTS THE ROW
//     // THEN IT CLEARS THE ROW AND CELL
//     row += `${cell}`;
//     console.log(row);
//     cell = '';
//     row = '';
//   }

//   if (i === csv.length - 1) {
//     // PRINTS THE LAST ROW
//     row += `${cell}`;
//     console.log(row);
//   }
// }

// **************
// let table1 = testData.split('\n');
// table1.forEach(element => {
//     console.log(element)
//     let row = element.split(',');
//     console.log(row[1]);
// });
// ****************