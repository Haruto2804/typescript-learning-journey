/**
 * @file TypeScript Core Mastery: Objects, Functions & Strict Typing
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Comprehensive guide on Strict Null Checks, Function Types, and Advanced Object Structures.
 */

/* 4. ADVANCED OBJECT STRUCTURES (USER & STORAGE)                             */
/* -------------------------------------------------------------------------- */

/**
 * Defining strict object shapes with Optional (?) and Readonly modifiers.
 */

type User = {
  username: string;           // Required
  id: string;                 // Required
  name: string;               // Required
  email?: string;             // Optional property
  readonly createdAt: Date;   // Cannot be modified after initialization
};

const user1: User = {
  username: "baovadat6789",
  id: "2",
  name: "Bảo",
  email: "ngobao.software@gmail.com",
  createdAt: new Date(),
};

/**
 * STORAGE TYPE: Represents a resource or asset container.
 */
type Storage = {
  name: string;
  stonk: number;
};

const mainVault: Storage = {
  name: "Silicon Valley Cache",
  stonk: 15000,
};

/* -------------------------------------------------------------------------- */
/* 4. DYNAMIC KEYS: INDEX SIGNATURES VS. RECORD                               */
/* -------------------------------------------------------------------------- */

/**
 * INDEX SIGNATURE: Used when the specific key names are unknown but the type is consistent.
 */
type Count = { [key: string]: number };

const inventory: Count = {
  "banana": 12,
  "apple": 45,
};

/**
 * RECORD UTILITY: Used to map specific properties to a type.
 * Note: If you define specific keys, you cannot add extra ones like 'videos'.
 */
type Metrics = "likes" | "views" | "shares";
type SocialStats = Record<Metrics, number>;

const userData: SocialStats = {
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