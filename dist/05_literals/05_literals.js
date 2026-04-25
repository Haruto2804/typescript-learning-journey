/**
 * @file TypeScript Core Mastery: Literal Types & Discriminated Unions
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Detailed guide on Literal Types, Union Types, and Type Narrowing.
 */
let requestStatus = "pending";
const result = 4;
function handleResponse(response) {
    if (response.status === "success") {
        // TypeScript tự hiểu ở đây response là UploadSuccess
        console.log("File uploaded at: " + response.url);
    }
    else {
        // TypeScript tự hiểu ở đây response là UploadError
        console.error("Upload failed: " + response.message);
    }
}
/* -------------------------------------------------------------------------- */
/* 5. LITERAL INFERENCE & CONST ASSERTIONS                                    */
/* -------------------------------------------------------------------------- */
/**
 * Khi khởi tạo một object, TypeScript mặc định coi các thuộc tính là kiểu rộng (string, number).
 * Sử dụng 'as const' để ép chúng thành Literal Types.
 */
const req = {
    url: "https://api.haruto.dev/v1",
    method: "GET"
};
// Nếu không có 'as const', method sẽ là kiểu 'string', dẫn đến lỗi khi truyền vào hàm yêu cầu Literal.
function makeRequest(url, method) {
    console.log(`Sending ${method} request to ${url}`);
}
makeRequest(req.url, req.method); // OK nhờ 'as const'
function renderUI(state) {
    switch (state.status) {
        case "loading":
            // TypeScript hiểu state là LoadingState
            console.log("Đang tải dữ liệu...");
            break;
        case "success":
            // TypeScript hiểu state là SuccessState, cho phép truy cập .data
            console.log("Dữ liệu nhận được:", state.data.join(", "));
            break;
        case "error":
            // TypeScript hiểu state là ErrorState, cho phép truy cập .message
            console.error("Lỗi hệ thống:", state.message);
            break;
        default:
            /**
             * Mẹo nâng cao: Exhaustive Checking (Kiểm tra toàn diện)
             * Nếu sau này Master thêm một state mới (ví dụ: "idle") mà quên chưa thêm case ở đây,
             * dòng dưới đây sẽ báo lỗi đỏ ngay lập tức!
             */
            const _exhaustiveCheck = state;
            return _exhaustiveCheck;
    }
}
/* -------------------------------------------------------------------------- */
/* THE GOLDEN RULES FOR HARUTO                                                */
/* -------------------------------------------------------------------------- */
/**
 *
 * 1. NARROWING: Luôn sử dụng Literal Types để thu hẹp phạm vi biến (Type Narrowing), giúp tránh bug logic.
 * 2. PREDICTABILITY: Ưu tiên Union của Literals thay vì 'string' bừa bãi để IDE có thể gợi ý (Intellisense) chính xác.
 * 3. CONST ASSERTION: Sử dụng 'as const' khi định nghĩa các Object cấu hình (config) để đảm bảo tính bất biến toàn diện.
 */
console.log("Lesson 05: Literals and Discriminated Unions documented for Haruto.");
export {};
//# sourceMappingURL=05_literals.js.map