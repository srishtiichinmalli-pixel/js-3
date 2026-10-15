/* ==========================================
   PART 1: Variables and Data Types
   ========================================== */

console.log("--- PART 1: Variables and Data Types ---");

// 1. Declare variables using var, let, and const. Reassign and redeclare where allowed.
var x = 10;
var x = 20; // Allowed with var
x = 30;     // Reassignment allowed

let y = 15;
// let y = 25; // Error: Cannot redeclare block-scoped variable 'y'
y = 35;        // Reassignment allowed

const z = 50;
// const z = 60; // Error: Identifier 'z' has already been declared
// z = 70;       // Error: Assignment to constant variable.

console.log("var x:", x, "| let y:", y, "| const z:", z);


// 2. Variables for name, age, and programming knowledge, with typeof
let myName = "Purvi";
let myAge = 23;
let knowsProgramming = true;

console.log("Name:", myName, "Type:", typeof myName);
console.log("Age:", myAge, "Type:", typeof myAge);
console.log("Knows Programming:", knowsProgramming, "Type:", typeof knowsProgramming);


// 3. Array of 5 fruits
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log("Complete Fruits Array:", fruits);
console.log("First Element:", fruits[0]);
console.log("Last Element:", fruits[fruits.length - 1]);


// 4. Object containing name, role, and CGPA
let profile = {
    name: "Purvi",
    role: "Frontend Developer",
    cgpa: 8.8
};
console.log("Object Name property:", profile.name);
console.log("Object Role property:", profile.role);
console.log("Object CGPA property:", profile.cgpa);


// 5. Prompt for user's name and age, alert name, log age
let userName = prompt("Part 1 - Enter your name:");
let userAge = prompt("Part 1 - Enter your age:");

if (userName) {
    alert("Hello, " + userName + "!");
}
console.log("User Age from Prompt:", userAge, "Type:", typeof userAge);



/* ==========================================
   PART 2: Operators
   ========================================== */

console.log("\n--- PART 2: Operators ---");

// 6. Arithmetic operators
let num1 = 17, num2 = 4;
console.log("Addition (17 + 4):", num1 + num2);
console.log("Subtraction (17 - 4):", num1 - num2);
console.log("Multiplication (17 * 4):", num1 * num2);
console.log("Division (17 / 4):", num1 / num2);
console.log("Modulus (17 % 4):", num1 % num2);
console.log("Exponentiation (17 ** 4):", num1 ** num2);


// 7. Predict output: postfix vs prefix increment
let a = 5;
console.log("Q7 output 1 (a++):", a++); // Prints 5, then a becomes 6
console.log("Q7 output 2 (a):", a);      // Prints 6
console.log("Q7 output 3 (++a):", ++a); // a becomes 7, then prints 7


// 8. Predict output: decrement operators
let a_val = 10;
let b_val = a_val--; // b_val = 10, a_val becomes 9
let c_val = --a_val; // a_val becomes 8, c_val = 8

console.log("Q8 - a:", a_val); // 8
console.log("Q8 - b:", b_val); // 10
console.log("Q8 - c:", c_val); // 8


// 9. Assignment operators (+=, -=, *=, /=, %=)
let val = 10;
val += 5; console.log("+= 5:", val);  // 15
val -= 3; console.log("-= 3:", val);  // 12
val *= 2; console.log("*= 2:", val);  // 24
val /= 4; console.log("/= 4:", val);  // 6
val %= 4; console.log("%= 4:", val);  // 2


// 10. Comparison predictions
console.log("5 == '5':", 5 == "5");       // true (type coercion)
console.log("5 === '5':", 5 === "5");     // false (strict equality)
console.log("10 != '10':", 10 != "10");   // false
console.log("10 !== '10':", 10 !== "10"); // true


// 11. Logical operators (&&, ||, !)
let isAdult = true;
let hasID = false;
console.log("isAdult && hasID:", isAdult && hasID); // false
console.log("isAdult || hasID:", isAdult || hasID); // true
console.log("!hasID:", !hasID);                   // true


// 12. Ternary operator for age eligibility
let checkAge = 20;
let message = (checkAge >= 18) ? "Eligible (18 or above)" : "Not eligible (Under 18)";
console.log("Ternary Age Check:", message);



/* ==========================================
   PART 3: Type Casting and Conditions
   ========================================== */

console.log("\n--- PART 3: Type Casting and Conditions ---");

// 13. Predict data types
console.log("typeof ('hello' + 10):", typeof ("hello" + 10));         // string
console.log("typeof (10 + true):", typeof (10 + true));               // number (true coerces to 1)
console.log("typeof (10 + null):", typeof (10 + null));               // number (null coerces to 0)
console.log("typeof ('hello' + undefined):", typeof ("hello" + undefined)); // string


// 14. Number() conversion with prompt
let inputStr = prompt("Part 3 - Enter a number to add 10 to:");
let convertedNum = Number(inputStr);
console.log("Number conversion result (+ 10):", convertedNum + 10);


// 15. Boolean() values
console.log("Boolean(''):", Boolean(""));           // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(0):", Boolean(0));             // false
console.log("Boolean(true):", Boolean(true));       // true


// 16. If-else statement for positive/negative number
let testNum = -5;
if (testNum > 0) {
    console.log(testNum, "is positive.");
} else {
    console.log(testNum, "is not positive.");
}


// 17. Else-if based on time of day
let hour = 14; // 24-hour format
if (hour >= 4 && hour < 7) {
    console.log("Early morning");
} else if (hour >= 7 && hour < 12) {
    console.log("Morning");
} else if (hour >= 12 && hour < 17) {
    console.log("Afternoon");
} else if (hour >= 17 && hour < 21) {
    console.log("Evening");
} else {
    console.log("Night");
}


// 18. Nested if statement (Age, Height, Weight)
let ageVal = 20;
let heightVal = 170; // cm
let weightVal = 65;  // kg

if (ageVal >= 18) {
    if (heightVal >= 160) {
        if (weightVal >= 50 && weightVal <= 90) {
            console.log("Nested If: Fully eligible based on criteria.");
        } else {
            console.log("Nested If: Weight criteria not met.");
        }
    } else {
        console.log("Nested If: Height criteria not met.");
    }
} else {
    console.log("Nested If: Too young.");
}



/* ==========================================
   PART 4: Switch and Loops
   ========================================== */

console.log("\n--- PART 4: Switch and Loops ---");

// 19. Traffic light switch statement
let trafficLight = "green";
switch (trafficLight.toLowerCase()) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Get ready!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Error: Invalid traffic light color!");
}


// 20. For loop: 1 to 20
let loop1Result = "";
for (let i = 1; i <= 20; i++) {
    loop1Result += i + " ";
}
console.log("Numbers 1 to 20:", loop1Result);


// 21. For loop: even numbers 2 to 20
let evenResult = "";
for (let i = 2; i <= 20; i += 2) {
    evenResult += i + " ";
}
console.log("Even numbers 2 to 20:", evenResult);


// 22. While loop: 10 down to 1
let countdown = "";
let w = 10;
while (w >= 1) {
    countdown += w + " ";
    w--;
}
console.log("Countdown 10 to 1:", countdown);


// 23. Do-while loop: 1 to 10
let doWhileRes = "";
let dw = 1;
do {
    doWhileRes += dw + " ";
    dw++;
} while (dw <= 10);
console.log("Do-while 1 to 10:", doWhileRes);


// 24. For-of loop: character in "JavaScript"
let wordChars = "";
for (let char of "JavaScript") {
    wordChars += char + " ";
}
console.log("Characters in 'JavaScript':", wordChars);


// 25. For-of loop: array of student names
let students = ["sneha", "pooja", "Dinesh", "sourav", "lisa"];
console.log("Students list:");
for (let studentName of students) {
    console.log("-", studentName);
}


// 26. For-in loop: iterate over student object keys and values
let studentObj = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};
console.log("Object properties using for-in:");
for (let key in studentObj) {
    console.log(key + ":", studentObj[key]);
}



/* ==========================================
   PART 5: Mixed Practice
   ========================================== */

console.log("\n--- PART 5: Mixed Practice ---");

// 27. Take two numbers via prompt and display sum, difference, product, remainder
let pNum1 = Number(prompt("Part 5 - Enter first number:"));
let pNum2 = Number(prompt("Part 5 - Enter second number:"));

if (!isNaN(pNum1) && !isNaN(pNum2)) {
    console.log("Mixed Practice - Sum:", pNum1 + pNum2);
    console.log("Mixed Practice - Difference:", pNum1 - pNum2);
    console.log("Mixed Practice - Product:", pNum1 * pNum2);
    console.log("Mixed Practice - Remainder:", pNum1 % pNum2);
} else {
    console.log("Invalid numbers supplied in Part 5 prompt.");
}


// 28. Array of 5 numbers, print numbers > 10
let numberArray = [4, 12, 8, 25, 15];
console.log("Numbers greater than 10 from [4, 12, 8, 25, 15]:");
for (let num of numberArray) {
    if (num > 10) {
        console.log(num);
    }
}


// 29. Take user's age via prompt, check eligibility, display via alert()
let checkEligibilityAge = Number(prompt("Part 5 - Enter your age to check voting/driving eligibility:"));
if (!isNaN(checkEligibilityAge)) {
    if (checkEligibilityAge >= 18) {
        alert("You are eligible!");
    } else {
        alert("You are not eligible yet.");
    }
}


// 30. Simple menu using switch (addition, subtraction, multiplication, division)
let operation = prompt("Choose operation: 'add', 'sub', 'mul', or 'div'").toLowerCase();
let opNum1 = Number(prompt("Enter first operand:"));
let opNum2 = Number(prompt("Enter second operand:"));
let calcResult;

switch (operation) {
    case "add":
        calcResult = opNum1 + opNum2;
        alert("Result: " + calcResult);
        break;
    case "sub":
        calcResult = opNum1 - opNum2;
        alert("Result: " + calcResult);
        break;
    case "mul":
        calcResult = opNum1 * opNum2;
        alert("Result: " + calcResult);
        break;
    case "div":
        if (opNum2 !== 0) {
            calcResult = opNum1 / opNum2;
            alert("Result: " + calcResult);
        } else {
            alert("Error: Division by zero is not allowed.");
        }
        break;
    default:
        alert("Invalid operation choice!");
}