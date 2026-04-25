// Bài 1: Làm chủ DOM Assertion (Frontend cơ bản)
// Tình huống: Bạn đang làm giao diện cho dự án CineStream. Bạn cần lấy thông tin từ một ô Input và thay đổi thuộc tính của một thẻ liên kết (Link).
// Yêu cầu: Sửa đoạn code sau bằng cách dùng as để TypeScript không báo lỗi.
// TypeScript
// // 1. Lấy thẻ input tìm kiếm phim
const searchField = document.getElementById("movie-input");
// // 2. Lấy thẻ link dẫn đến trang chi tiết
const movieLink = document.getElementById("detail-link");
function handleSearch() {
    // Sửa lỗi: Truy cập .value từ searchField
    const query = searchField.value;
    // Sửa lỗi: Thay đổi .href từ movieLink
    movieLink.href = `https://cinestream.tv/search?q=${query}`;
}
//********************************************************************************************************************
// Bài 2: Sử dụng Non-null Assertion (!)
// Tình huống: Bạn viết một hàm tính toán số dư cho ứng dụng Wealth Tracker. Bạn chắc chắn rằng biến container hiển thị 
// số dư luôn tồn tại trong HTML.
// Yêu cầu: Dùng dấu ! để loại bỏ cảnh báo lỗi null.
// TypeScript
function displayBalance(amount) {
    const display = document.getElementById("balance-amount");
    // Sửa lỗi: Dùng dấu '!' để ép TypeScript hiểu display không bao giờ null
    display.innerText = `${amount} VND`;
}
//********************************************************************************************************************
// Bài 3: Bảo mật cấu hình với as const
// Tình huống: Bạn cần định nghĩa danh sách các trạng thái của một đơn hàng trong hệ thống.
// Yêu cầu: 1. Sử dụng as const để các trạng thái này không bị thay đổi.
// 2. Thử thay đổi một giá trị để xem TypeScript báo lỗi như thế nào.
// TypeScript
const ORDER_STATUS = {
    PENDING: "đang chờ",
    SHIPPING: "đang giao",
    DELIVERED: "đã giao"
}; // Thêm as const vào đây
// Thử nghiệm: Bỏ comment dòng dưới để thấy lỗi
//ORDER_STATUS.PENDING = "hủy bỏ"; // khi thêm 'as const' ORDER_STATUS chỉ đc đọc k đc phép thay đổi!
//********************************************************************************************************************
// Bài 4: Type Guard vs Assertion (An toàn dữ liệu)
// Tình huống: Bạn nhận dữ liệu từ API phim, đôi khi nó trả về mã lỗi là number, đôi khi là một tin nhắn lỗi string.
// Yêu cầu: Viết logic dùng typeof (Type Guard) để xử lý thay vì dùng as.
//TypeScript
function handleError(error) {
    // Nếu error là string: in ra "Lỗi: [nội dung lỗi]"
    if (typeof error === "string") {
        console.log(`Lỗi [${error}]`);
    }
    // Nếu error là number: in ra "Mã lỗi hệ thống: [số mã lỗi]"
    else if (typeof error === "number") {
        console.log(`Mã lỗi hệ thống: [${error}]`);
    }
    // Viết code của bạn ở đây...
}
export {};
//# sourceMappingURL=06_assertions_exercise.js.map