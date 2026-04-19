/**
 * @file TypeScript Advanced Primitives & Functions
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Focusing on Strict Null Checks, Void/Never types, and best practices.
 */

/* -------------------------------------------------------------------------- */
/* 1. STRICT NULL CHECKS                               */
/* -------------------------------------------------------------------------- */

/**
 * STRICT NULL CHECKS: When enabled in tsconfig.json, 'null' and 'undefined' 
 * are not assignable to other types.
 * * This prevents the "Billion Dollar Mistake" (Null Pointer Exceptions).
 */

// Error if strictNullChecks is ON:
// let title: string = "Haruto_Sama";
// title = undefined; 

// The Professional Way: Use Union Types
let title: string | undefined = "HarutoSama";

/* -------------------------------------------------------------------------- */
/* 2. SPECIAL FUNCTION RETURN TYPES                         */
/* -------------------------------------------------------------------------- */

/**
 * VOID: Used for functions that perform an action but DO NOT return a value.
 * Think of it as: "I do something, but I give back nothing useful."
 * @param msg - The message to display
 */
function log(msg: string): void {
  console.log(msg);
  // No return statement here
}

/**
 * NEVER: Represents values that NEVER occur.
 * Typically used for functions that:
 * 1. Throw an error (execution stops)
 * 2. Have an infinite loop (execution never ends)
 * @param msg - The error message
 */
function fail(msg: string): never {
  throw new Error(msg);
  // This line is unreachable
}

/* -------------------------------------------------------------------------- */
/* 3. THE "GOLDEN RULE" OF TYPESCRIPT                       */
/* -------------------------------------------------------------------------- */

/**
 * BEST PRACTICE: Avoid the 'any' keyword.
 * * Why? Using 'any' turns off the TypeScript compiler's protection, 
 * making your code prone to runtime bugs.
 * * If you don't know the type yet, use 'unknown' instead of 'any'.
 */

// AVOID THIS:
let badVariable: any = "Danger!"; 

// DO THIS: (If you need flexibility)
let flexibleVariable: string | number = 2804;

/* -------------------------------------------------------------------------- */
/* 4. TYPE ALIASES (BONUS FOR HARUTO)                       */
/* -------------------------------------------------------------------------- */

/**
 * To keep code clean, we can create custom names for types.
 */
type ID = string | number;
let userID: ID = "haruto_01";
let productID: ID = 1001;

console.log("TypeScript Security initialized for Master Haruto.");