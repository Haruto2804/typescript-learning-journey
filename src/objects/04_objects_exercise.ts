// Lesson 1: Inventory Management (Index Signatures)
// Requirements: 1. Define a data type called Storage using Index Signature.
// 2. Rules: Product name is a string, quantity is a number.
// 3. Create a Storage variable with the property myWarehouse and add three arbitrary items.
type Storage = {
  [k: string]: number
}
const storage1: Storage = {
  "banana": 5,
  "orange": 19,
  "lemon": 100
}
console.log(storage1);


// Lesson 2: Authorization System (Record)
// Requirement:
// Assume you have three roles in the system: "admin", "editor", and "viewer".

// Use Record to create a data type called RolePermissions.

// In this type, Key represents the roles above, and Value is a number representing the access level (
// e.g., admin is 1, editor is 2...view is 3).

// Bonus question: If you assign a variable of type RolePermissions but omit "viewer", will TypeScript throw an error? -- YES!
type Role = "admin" | "editor" | "viewer";
type RolePermissions = Record<Role,number>;
const userRole: RolePermissions = {
  admin: 1,
  editor: 2,
  viewer: 3, 
  // sama: 5,  Error: Because its not in Role 
}


/* Lesson 3: Code Refactoring
 You have the following "manufactured" code TypeScript
    type CarStats = {
      speed: number;
      fuel: number;
      price: number;
    }

 Requirement: Rewrite this CarStats type using Record and Union Type (|) to make the code look cleaner and more professional.
 */
//Answer:
type CarStats = Record<"speed" |"fuel"|"price",number>


/*
Lesson 4: The "Detective" (Debug) Challenge
The following code has an error. Identify the line with the error and explain why.

TypeScript
type LaptopBrand = "Apple" | "Dell" | "Asus";
type LaptopInventory = Record<LaptopBrand, number>;
const myStock: LaptopInventory = {
  "Apple": 10,
  "Dell": 5,
  "HP": 12 // Is there a problem with this line? -- ERROR: HP IS NOT IN LaptopBrand
};
*/

