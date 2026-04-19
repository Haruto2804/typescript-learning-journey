/**
 * @file TypeScript Fundamentals: Type Inference & Union Types
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description This file demonstrates how TypeScript guesses types
 * and handles multiple possible types for a single variable.
 */
/* -------------------------------------------------------------------------- */
/* 1. TYPE INFERENCE                               */
/* -------------------------------------------------------------------------- */
/**
 * TYPE INFERENCE: TypeScript automatically "guesses" the type based on the assigned value.
 * You don't always need to write ': type' manually.
 */
// TS infers 'count' as a 'number' because it is initialized with 0.
let count = 0;
// TS infers 'site' as a literal 'string' because it's a const.
const site = "haruto2804";
// TS infers 'scores' as an array of numbers: 'number[]'
const scores = [9, 8, 3];
/**
 * EXPLICIT TYPES: When writing functions, we usually define types
 * for parameters and return values to ensure strict logic.
 * * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
export function add(a, b) {
    return a + b;
}
/* -------------------------------------------------------------------------- */
/* 2. UNION TYPES                                */
/* -------------------------------------------------------------------------- */
/**
 * UNION TYPES: Allows a variable to hold more than one type of data.
 * Syntax: typeA | typeB
 */
// 'maybe' can be either a string OR a number
let maybe;
/**
 * DYNAMIC ASSIGNMENT:
 * Logic: If a random number > 0.5, it's a string; otherwise, it's a number.
 */
maybe = Math.random() > 0.5 ? "Haruto" : 100;
/* -------------------------------------------------------------------------- */
/* 3. TYPE NARROWING                               */
/* -------------------------------------------------------------------------- */
/**
 * NARROWING: Since 'maybe' is a Union Type, we must check its type
 * before using type-specific methods (like .toUpperCase() or .toFixed()).
 */
if (typeof maybe === "string") {
    // Inside this block, TS is 100% sure 'maybe' is a string.
    console.log("String detected:", maybe.toUpperCase());
}
else {
    // Inside this block, TS is 100% sure 'maybe' is a number.
    console.log("Number detected:", maybe.toFixed(2));
}
/**
 * TROUBLESHOOTING TIP:
 * If you see 'MODULE_NOT_FOUND', remember to compile your code first:
 * 1. Run 'npx tsc' to build the 'dist' folder.
 * 2. Run 'node dist/your-file.js' to execute.
 */ 
//# sourceMappingURL=01_inference.js.map