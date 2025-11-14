//Creating the array of fruits
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]; 
console.log(fruits);

//printing the first and last items of the array
console.log("First item:", fruits[0]);
console.log("Last item:", fruits[fruits.length - 1]);

//Adding a new fruit to the array
fruits.push("Woodapple");
console.log("After adding new fruit:", fruits);

//Removing the second fruit from the array
fruits.splice(1, 1);  // remove 1 item at index 1
console.log("After removing second fruit:", fruits);

//Finding the length of the array
console.log("Length of array:", fruits.length);

//Using for loop to print
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Using forEach to print
fruits.forEach((fruit) => {
    console.log(fruit);
});

//Creating an array of numbers
const numbers = [2, 5, 8, 10, 12];

//Using map to create a new array with each number doubled
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled);

//Using filter to create a new array with numbers greater than 6
const greaterThanSix = numbers.filter(num => num > 6);
console.log("Numbers > 6:", greaterThanSix);

//Using reduce to calculate the sum of all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);

//Using includes to check if the array contains the number 8
const hasEight = numbers.includes(8);
console.log("Does the array include 8?", hasEight);

//Using indexOf to find the index of number 10
const indexOfTen = numbers.indexOf(10);
console.log("Index of 10:", indexOfTen);

//Using sort to sort the array in ascending order
const sortedArray = numbers.sort((a, b) => a - b);
console.log("Sorted array:", sortedArray);

//Creating an object to represent a student
const student = {
    name: "Kavindu",
    age: 21,
    faculty: "Computing",
    subjects: ["Web Development", "Database Systems", "Programming"]
};

//Printing student name and faculty
console.log("Name:", student.name);
console.log("Faculty:", student.faculty);

//Adding a new property
student.year = 2025;
console.log("Added year:", student.year);

//Updating the age property
student.age = 22;
console.log("Updated age:", student.age);

//Using forEach to print all subjects
student.subjects.forEach(subject => {
    console.log(subject);
});

//Creating an array of student objects
const students = [ 
    {name: "Kavindu", age: 21, faculty: "Computing"}, 
    {name: "Nimesha", age: 22, faculty: "Engineering"}, 
    {name: "Dinuka", age: 23, faculty: "Business"} 
];

//Using forEach to print names of all students
students.forEach(student => {
    console.log(student.name);
});

//Finding students older than 21
const olderStudents = students.filter(student => student.age > 21);
console.log("Students older than 21:", olderStudents);

//Creating an array of faculty names
const facultyNames = students.map(student => student.faculty);
console.log("Faculty names:", facultyNames);

//Creating a nested object to represent a classroom
const classroom = { 
className: "IT2025", 
teacher: "Mr. Perera", 
students: [ 
{name: "Kavindu", age: 21}, 
{name: "Nimesha", age: 22}, 
{name: "Dinuka", age: 23} 
] 
}; 

//Printing teaceher's name
console.log("Teacher:", classroom.teacher);

//Adding a new student to the classroom
classroom.students.push({name: "MOgith", age: 22});
console.log("Added new student:", classroom.students);

//Using forEach to print names of all students in the classroom
classroom.students.forEach(student => {
    console.log(student.name);
});

//Creating an array of product objects
const products = [ 
    {name: "Keyboard", price: 2500, qty: 2}, 
    {name: "Mouse", price: 1500, qty: 3}, 
    {name: "Monitor", price: 22000, qty: 1} 
];

//Calculating the total value of all products
const totalValue = products.reduce((total, product) => {
    return total + (product.price * product.qty);
}, 0);

console.log("Total value of all products:", totalValue);
