/**
 * @file TypeScript Core Mastery: Arrays
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Tổng hợp kỹ thuật định nghĩa, quản lý và tối ưu hóa mảng trong TypeScript.
 */
/* 10. BASIC ARRAY TYPES (ĐỊNH NGHĨA MẢNG CƠ BẢN)                             */
/* -------------------------------------------------------------------------- */
/**
 * Có 2 cách phổ biến để định nghĩa một mảng. Cả hai đều có chức năng như nhau.
 * Ưu tiên cách 1 (Square Brackets) vì tính ngắn gọn, dễ đọc.
 */
// 1. Sử dụng Square Brackets [] (Phổ biến nhất)
let skills = ["React", "Node.js", "TypeScript"];
// 2. Sử dụng Generic Array Type: Array<type>
let scores = [8.5, 9.0, 10];
// 3. Mảng rỗng (Cần khai báo kiểu ngay từ đầu để tránh kiểu 'never[]')
const projects = [];
projects.push("Wealth Tracker"); // OK
/* 10. MULTIDIMENSIONAL ARRAYS (MẢNG ĐA CHIỀU)                                */
/* -------------------------------------------------------------------------- */
/**
 * Định nghĩa mảng trong mảng (thường dùng cho ma trận hoặc tọa độ đồ họa).
 */
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
/* 10. UNION IN ARRAYS (MẢNG HỖN HỢP)                                         */
/* -------------------------------------------------------------------------- */
/**
 * Khi một mảng cần chứa nhiều loại dữ liệu khác nhau.
 * Lưu ý: Cần bọc ngoặc tròn (type | type)[] để tránh hiểu lầm.
 */
const mixedData = ["Haruto", 2804, "STU", 2026];
// Nếu viết: string | number[] => Biến là 1 chuỗi HOẶC 1 mảng số. (SAI Ý ĐỊNH)
/* 10. INFERENCE & READONLY ARRAYS                                            */
/* -------------------------------------------------------------------------- */
/**
 * TypeScript có khả năng tự suy luận kiểu dựa trên giá trị khởi tạo.
 * Sử dụng 'readonly' để ngăn chặn các phương thức làm thay đổi mảng (mutate).
 */
const colors = ["red", "green", "blue"]; // Tự hiểu là string[]
const apiConfig = ["https://api.v1", "https://api.v2"];
const movieList = [
    {
        id: 1,
        title: "Chainsaw Man",
        genres: ["Action", "Dark Fantasy"]
    },
    {
        id: 2,
        title: "Fate/stay night",
        genres: ["Action", "Magic", "Supernatural"]
    }
];
/* -------------------------------------------------------------------------- */
/* THE GOLDEN RULES FOR HARUTO                                                */
/* -------------------------------------------------------------------------- */
/**
 * 1. TYPE ANNOTATION: Luôn khai báo kiểu cho mảng rỗng [] để tránh lỗi 'any' ngầm định.
 * 2. GENERIC VS BRACKET: Sử dụng [] cho mảng đơn giản, dùng Array<T> khi viết Generic functions.
 * 3. READONLY: Sử dụng 'readonly' cho các hằng số cấu hình hệ thống hoặc dữ liệu từ API không được phép sửa.
 * 4. ARRAY METHODS: Các hàm như .map(), .filter(), .reduce() sẽ tự động nhận diện kiểu dữ liệu của phần tử dựa trên khai báo mảng.
 */
console.log("Lesson 10: Array masterclass documented for Haruto.");
export {};
//# sourceMappingURL=08_arrays.js.map