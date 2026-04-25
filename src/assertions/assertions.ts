/**
 * @file TypeScript Core Mastery: Type Assertions (Beginner Friendly)
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Hướng dẫn chi tiết về cách ép kiểu và xử lý dữ liệu trong TypeScript cho dự án thực tế.
 */

/* 1. TYPE ASSERTION (ÉP KIỂU CƠ BẢN)                                         */
/* -------------------------------------------------------------------------- */

/**
 * TYPE ASSERTION: Dùng khi bạn (lập trình viên) biết rõ kiểu dữ liệu hơn TypeScript.
 * Nó giúp "tắt" các cảnh báo lỗi đỏ khi bạn chắc chắn dữ liệu là đúng.
 */

// Sử dụng cú pháp 'as' (Khuyên dùng trong React/JSX)
let welcomeMessage: unknown = "Chào mừng Haruto đến với bài học!";

// TypeScript sẽ báo lỗi nếu bạn không dùng 'as string' trước khi lấy .length
let messageLength: number = (welcomeMessage as string).length;

/* 2. DOM ASSERTIONS (XỬ LÝ GIAO DIỆN)                                       */
/* -------------------------------------------------------------------------- */

/**
 * Quan trọng nhất khi làm Frontend: Ép kiểu cho các thẻ HTML cụ thể.
 * Nếu không ép kiểu, bạn sẽ không thể truy cập các thuộc tính như .value, .src, .href.
 */

// Ép kiểu cho Input để lấy giá trị
const searchInput = document.getElementById("movie-search") as HTMLInputElement;
if (searchInput) {
    console.log("Từ khóa tìm kiếm:", searchInput.value);
}

// Ép kiểu cho thẻ Ảnh (Ví dụ cho CineStream)
const posterImg = document.getElementById("movie-poster") as HTMLImageElement;
if (posterImg) {
    posterImg.src = "https://image.tmdb.org/t/p/w500/sample.jpg";
}

/* 3. NON-NULL ASSERTION OPERATOR (!)                                        */
/* -------------------------------------------------------------------------- */

/**
 * Dùng dấu '!' khi bạn chắc chắn một biến KHÔNG BAO GIỜ bị null hoặc undefined.
 * Thường dùng khi bạn biết chắc chắn một Element đã tồn tại sẵn trong file HTML.
 */

const submitBtn = document.getElementById("btn-submit")!; 
// Dấu '!' báo hiệu: "Yên tâm, nút này chắc chắn có trên giao diện, đừng báo lỗi null".

function greetUser(name: string | null) {
    // Nếu chắc chắn name đã được kiểm tra ở bước trước:
    console.log("Xin chào, " + name!.trim());
}

/* 4. CONST ASSERTIONS (AS CONST)                                            */
/* -------------------------------------------------------------------------- */

/**
 * Dùng để "đóng băng" dữ liệu, biến đối tượng thành Read-only (chỉ đọc).
 * Rất hữu ích cho việc quản lý Config hoặc các hằng số không đổi.
 */

const APP_SETTINGS = {
    theme: "dark",
    apiVersion: "v3",
    role: "admin"
} as const;

// APP_SETTINGS.theme = "light"; // ERROR: Không thể thay đổi giá trị của hằng số 'as const'.

/* 5. TYPE GUARD (AN TOÀN HƠN ASSERTION)                                     */
/* -------------------------------------------------------------------------- */

/**
 * Thay vì "ép buộc" kiểu, chúng ta dùng 'if' để kiểm tra thực tế.
 * Đây là cách an toàn nhất để tránh lỗi khi ứng dụng đang chạy (Runtime).
 */

function printBalance(amount: string | number) {
    if (typeof amount === "string") {
        console.log("Số dư (string):", parseFloat(amount).toFixed(2));
    } else {
        console.log("Số dư (number):", amount.toFixed(2));
    }
}

/* -------------------------------------------------------------------------- */
/* THE GOLDEN RULES FOR HARUTO                                                */
/* -------------------------------------------------------------------------- */

/**
 * 1. ƯU TIÊN KIỂM TRA (Type Guard): Luôn dùng 'if (typeof...)' nếu có thể thay vì 'as'.
 * 2. CỤ THỂ HÓA DOM: Luôn dùng 'HTMLInputElement', 'HTMLButtonElement'... để có gợi ý code tốt nhất.
 * 3. HẠN CHẾ ANY: Đừng lạm dụng 'as any' vì nó sẽ làm mất đi ý nghĩa của TypeScript.
 */

console.log("Lesson 06: Type Assertions documented successfully for Haruto's GitHub.");