/**
 * @file TypeScript Core Mastery: Intersection Types
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Hướng dẫn cách kết hợp nhiều kiểu dữ liệu để tạo ra cấu trúc đối tượng phức tạp.
 */
const haruto = {
    name: "Ngô Lưu Gia Bảo",
    studentId: 202401,
    clubName: "TypeScript Mastery",
    role: "Lead Developer"
}; // OK: Phải có đủ thuộc tính của cả 2 type
const superUser = {
    privileges: ["server:restart", "user:delete"],
    email: "admin@dev.io",
    createdAt: new Date()
};
const productResponse = {
    status: "success",
    data: { name: "Mechanical Keyboard", price: 150 },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z"
};
/* -------------------------------------------------------------------------- */
/* THE GOLDEN RULES FOR HARUTO                                                */
/* -------------------------------------------------------------------------- */
/**
 * 1. COMPOSITION OVER INHERITANCE: Ưu tiên dùng Intersection để lắp ghép các "mảnh"
 * dữ liệu nhỏ thành một đối tượng lớn, giúp code linh hoạt hơn kế thừa đa tầng.
 * 2. CẨN THẬN NEVER: Luôn kiểm tra xem các kiểu được giao thoa có thuộc tính nào
 * trùng tên nhưng khác kiểu dữ liệu hay không để tránh lỗi 'never'.
 * 3. READABILITY: Nếu giao thoa quá 3 kiểu dữ liệu, hãy xem xét đặt cho nó một
 * Type Alias riêng biệt để code dễ đọc hơn.
 */
console.log("Lesson 08: Intersection Types masterclass documented for Haruto.");
export {};
//# sourceMappingURL=08_insersections.js.map