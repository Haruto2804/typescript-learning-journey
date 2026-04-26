/**
 * @file TypeScript Core Mastery: Tuples
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Kỹ thuật định nghĩa bộ dữ liệu (Tuples) - Cấu trúc mảng có độ dài và kiểu dữ liệu cố định.
 */
/* 11. BASIC TUPLES (ĐỊNH NGHĨA TUPLE CƠ BẢN)                                */
/* -------------------------------------------------------------------------- */
/**
 * Tuple là một mảng có số lượng phần tử cố định và kiểu dữ liệu tại mỗi vị trí phải chính xác.
 */
// Khai báo Tuple: [kiểu_1, kiểu_2, ...]
let userSession;
// Khởi tạo: Phải đúng thứ tự và số lượng
userSession = [2804, "Haruto", true];
const startPoint = [10, 20];
const response = [200, "Success"];
/* 11. OPTIONAL & REST ELEMENTS (NÂNG CAO)                                    */
/* -------------------------------------------------------------------------- */
/**
 * Tuple có thể chứa các phần tử tùy chọn hoặc một danh sách dài các phần tử cùng kiểu ở cuối.
 */
// 1. Optional Elements (?): Phần tử thứ 3 có thể có hoặc không
let rgba;
rgba = [255, 255, 255]; // OK
rgba = [255, 255, 255, 0.5]; // OK
// 2. Rest Elements (...): Phần tử đầu cố định, phía sau là mảng bất kỳ
let leaderboard;
leaderboard = ["FC Online - AC Milan", 2100, 1950, 1800];
/* 11. READONLY TUPLES (BẢO VỆ DỮ LIỆU)                                       */
/* -------------------------------------------------------------------------- */
/**
 * Mặc định Tuple vẫn cho phép dùng .push() hoặc thay đổi giá trị qua index (sơ hở của TS).
 * Sử dụng 'readonly' để khóa chặt dữ liệu.
 */
const connection = ["localhost", 3000];
// connection[1] = 5000;      // ERROR: Cannot assign to '1' because it is a read-only property.
// connection.push("data");   // ERROR: Property 'push' does not exist on type 'readonly [string, number]'.
/* 11. TUPLES TRONG THỰC TẾ (REACT & LOGIC)                                   */
/* -------------------------------------------------------------------------- */
/**
 * Tuple cực kỳ hữu ích khi hàm cần trả về nhiều giá trị khác kiểu nhau.
 */
// Mô phỏng React Hook useState
function useCustomHook() {
    const state = "Active";
    const toggle = () => console.log("Toggled!");
    return [state, toggle];
}
const [status, setStatus] = useCustomHook(); // Destructuring Tuple
/* -------------------------------------------------------------------------- */
/* THE GOLDEN RULES FOR TUPLES                                                */
/* -------------------------------------------------------------------------- */
/**
 * 1. USE CASE: Dùng Tuple khi bạn biết chắc chắn cấu trúc dữ liệu (Tọa độ, cặp Key-Value, Hooks).
 * 2. READONLY FIRST: Luôn ưu tiên dùng 'readonly' cho Tuple để tránh các hàm .push() làm hỏng cấu trúc.
 * 3. NAMING: Luôn đặt tên cho phần tử (Named Tuples) để team-mate (hoặc chính bạn sau 3 tháng) dễ hiểu code.
 * 4. VS INTERFACE: Nếu dữ liệu có quá 4-5 phần tử, hãy cân nhắc dùng Interface/Object để dễ quản lý hơn.
 */
console.log("Lesson 11: Tuple mastery documented for Haruto.");
export {};
//# sourceMappingURL=10_tuples.js.map