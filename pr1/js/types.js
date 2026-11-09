"use strict";

let result = "8" + 2;
console.log("Result:", result);
console.log("Result type prediction:", "string");
console.log("Result type:", typeof result);
console.log(" ");

result = "8" - 2;
console.log("Result:", result);
console.log("Result type prediction:", "number");
console.log("Result type:", typeof result);
console.log(" ");

result = Number("8") + 2;
console.log("Result:", result);
console.log("Result type prediction:", "number");
console.log("Result type:", typeof result);
console.log(" ");

result = "12" > "3";
console.log("Result:", result);
console.log("Result type prediction:", "boolean");
console.log("Result type:", typeof result);
console.log(" ");

result = 12 === "12";
console.log("Result:", result);
console.log("Result type prediction:", "boolean");
console.log("Result type:", typeof result);
console.log(" ");

result = Number("");
console.log("Result:", result);
console.log("Result type prediction:", "number");
console.log("Result type:", typeof result);
console.log(" ");

result = Number("text");
console.log("Result:", result);
console.log("Result type prediction:", "number");
console.log("Result type:", typeof result);
console.log(" ");

result = Boolean("false");
console.log("Result:", result);
console.log("Result type prediction:", "boolean");
console.log("Result type:", typeof result);
console.log(" ");

result = typeof null;
console.log("Result:", result);
console.log("Result type prediction:", "type");
console.log("Result type:", typeof result);
console.log(" ");

result = typeof NaN;
console.log("Result:", result);
console.log("Result type prediction:", "string");
console.log("Result type:", typeof result);
console.log(" ");