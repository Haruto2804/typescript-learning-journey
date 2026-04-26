// Bài tập 1: Quản lý danh sách kỹ thuật (Cơ bản)
// Mục tiêu: Thực hành khai báo mảng và các phương thức cơ bản.
// Khai báo một mảng mySkills chứa các chuỗi: "JavaScript", "React", "Node.js".
const mySkills = ["JavaScript", "React", "Node.js"];
// Thêm kỹ năng "TypeScript" vào cuối mảng.
mySkills.push("Typescript");
// Tạo một mảng mới upperSkills bằng cách dùng hàm .map() để chuyển tất cả kỹ năng thành chữ hoa (Uppercase).
const upperSkills = mySkills.map((item) => {
    return item.toUpperCase();
});
console.log(upperSkills);
export {};
// Thử thách: Hãy khai báo một mảng rỗng projects và thử push một giá trị vào đó 
// mà không khai báo kiểu dữ liệu trước. Quan sát xem TypeScript có báo lỗi không?
//# sourceMappingURL=08_arrays_exercise.js.map