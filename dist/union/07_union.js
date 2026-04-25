/**
 * @file TypeScript Core Mastery: Union Types
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Hướng dẫn chi tiết về cách kết hợp nhiều kiểu dữ liệu và kỹ thuật Narrowing.
 */
/* 7. BASIC UNION TYPES (KIỂU HỢP CƠ BẢN)                                     */
/* -------------------------------------------------------------------------- */
/**
 * UNION TYPES: Cho phép một biến có thể nhận nhiều kiểu dữ liệu khác nhau.
 * Sử dụng ký hiệu '|' để ngăn cách các kiểu. Giúp code linh hoạt nhưng vẫn an toàn.
 */
// 1. Biến có thể là String hoặc Number
let userId;
userId = 101; // OK (Dùng cho ID kiểu số trong DB)
userId = "admin_01"; // OK (Dùng cho ID kiểu chuỗi/UUID)
// 2. Union trong Array (Dùng cho danh sách hỗn hợp)
const scores = [8.5, 10, "A+", 9.0];
function setQuality(quality) {
    console.log(`Đang thay đổi chất lượng sang: ${quality}`);
}
setQuality("1080p"); // OK
// setQuality("360p"); // ERROR: Argument of type '"360p"' is not assignable.
/* -------------------------------------------------------------------------- */
/* 7. TYPE NARROWING (KỸ THUẬT THU HẸP KIỂU)                                  */
/* -------------------------------------------------------------------------- */
/**
 * Khi dùng Union, TypeScript sẽ báo lỗi nếu bạn dùng hàm của một kiểu mà chưa kiểm tra.
 * Bạn CẦN dùng 'typeof' hoặc 'instanceof' để thu hẹp phạm vi kiểu dữ liệu.
 */
function formatInput(input) {
    // input.toUpperCase(); // ERROR: Vì lỡ input là number thì sao?
    if (typeof input === "string") {
        // TypeScript tự hiểu ở đây input chắc chắn là string
        return input.trim().toUpperCase();
    }
    // Ở đây TypeScript hiểu input chắc chắn là number
    return input.toFixed(2);
}
const newTx = {
    id: "tx_001",
    amount: 500000,
    type: "INCOME" // Nếu gõ sai thành "MONEY" sẽ báo lỗi ngay
};
/* -------------------------------------------------------------------------- */
/* THE GOLDEN RULES FOR HARUTO                                                */
/* -------------------------------------------------------------------------- */
/**
 * 1. TRÁNH ANY: Luôn ưu tiên dùng Union (string | number) thay vì 'any' để giữ tính an toàn.
 * 2. KIỂM TRA TRƯỚC: Luôn "Narrowing" kiểu dữ liệu trước khi gọi các hàm đặc thù của kiểu đó.
 * 3. LITERAL UNION: Sử dụng Literal Union cho các hằng số trạng thái để IDE gợi ý code (Intellisense) tốt nhất.
 */
console.log("Lesson 07: Union Types masterclass documented for Haruto.");
export {};
//# sourceMappingURL=07_union.js.map