/**
 * @file TypeScript Fundamentals: Primitive Types
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description In TypeScript, primitives are the most basic data types.
 * They represent a single value and are immutable.
 */
/* -------------------------------------------------------------------------- */
/* 1. THE CORE PRIMITIVES                            */
/* -------------------------------------------------------------------------- */
/**
 * STRING: Represents textual data.
 */
let username = "Haruto_2804";
let greeting = `Hello, ${username}!`; // Template literals are also strings
/**
 * NUMBER: Represents both integers and floating-point values.
 * TypeScript does not have a separate type for 'int' or 'float'.
 */
let age = 21;
let price = 99.99;
let hex = 0xf00d; // Hexadecimal
let binary = 0b1010; // Binary
/**
 * BOOLEAN: Represents a logical entity and can have two values: true and false.
 */
let isStudent = true;
let hasGraduated = false;
/* -------------------------------------------------------------------------- */
/* 2. SPECIAL TYPES (NULL & UNDEFINED)                     */
/* -------------------------------------------------------------------------- */
/**
 * UNDEFINED: A variable that has been declared but not assigned a value.
 * NULL: Represents the intentional absence of any object value.
 */
let empty = null;
let notFound = undefined;
// Note: If 'strictNullChecks' is true in tsconfig, you cannot assign null to a string.
// Use Union Types instead: let id: string | null = null;
/* -------------------------------------------------------------------------- */
/* 3. MODERN & RARE PRIMITIVES                         */
/* -------------------------------------------------------------------------- */
/**
 * BIGINT: Used for integers larger than 2^53 - 1.
 * Target must be ES2020 or higher.
 */
let hugeNumber = 100n;
let anotherHuge = BigInt("9007199254740991");
/**
 * SYMBOL: A primitive data type that is unique and immutable.
 * Often used as keys for object properties to avoid name collisions.
 */
let secretKey = Symbol("unique_id");
/* -------------------------------------------------------------------------- */
/* 4. THE "AVOID" TYPES                             */
/* -------------------------------------------------------------------------- */
/**
 * ANY: The "escape hatch". It turns off type checking.
 * WARNING: Overusing 'any' defeats the purpose of using TypeScript.
 */
let randomValue = "Could be anything";
randomValue = 2804;
randomValue = true;
/**
 * UNKNOWN: The type-safe counterpart of 'any'.
 * You can assign anything to 'unknown', but you cannot use it
 * until you perform a type check (Narrowing).
 */
let dataFromServer = "Secret Message";
// console.log(dataFromServer.toUpperCase()); // Error: Object is of type 'unknown'
if (typeof dataFromServer === "string") {
    console.log(dataFromServer.toUpperCase()); // Safe!
}
export {};
/* -------------------------------------------------------------------------- */
/* SUMMARY FOR GITHUB                             */
/* -------------------------------------------------------------------------- */
/**
 * KEY TAKEAWAYS:
 * 1. Type Annotation: Use ': type' to explicitly define data types.
 * 2. Immutability: Primitives themselves cannot be changed, only reassigned.
 * 3. Strictness: Keep 'strict: true' in your tsconfig to handle null/undefined safely.
 */ 
//# sourceMappingURL=02_primitives.js.map