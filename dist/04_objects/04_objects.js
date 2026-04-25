/**
 * @file TypeScript Core Mastery: Objects, Functions & Strict Typing
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Comprehensive guide on Strict Null Checks, Function Types, and Advanced Object Structures.
 */
const user1 = {
    username: "baovadat6789",
    id: "2",
    name: "Bảo",
    email: "ngobao.software@gmail.com",
    createdAt: new Date(),
};
const mainVault = {
    name: "Silicon Valley Cache",
    stonk: 15000,
};
const inventory = {
    "banana": 12,
    "apple": 45,
};
const userData = {
    likes: 1024,
    views: 5000,
    shares: 150,
    // videos: 10 // ERROR: 'videos' does not exist in type 'SocialStats'
};
/* -------------------------------------------------------------------------- */
/* THE GOLDEN RULES FOR HARUTO                                               */
/* -------------------------------------------------------------------------- */
/**
 * 1. IMMUTABILITY: Use 'readonly' for sensitive data like IDs or Timestamps.
 * 2. EXPLICITNESS: Use 'Record<K, T>' when keys are known; it provides better IDE autocompletion.
 * 3. SAFETY: If you don't know the type yet, use 'unknown' instead of 'any' to force a type check later.
 */
console.log("TypeScript Documentation updated in English for Haruto.");
export {};
//# sourceMappingURL=04_objects.js.map