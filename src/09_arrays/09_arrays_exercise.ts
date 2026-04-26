// Bài tập 1: Quản lý danh sách kỹ thuật (Cơ bản)
// Mục tiêu: Thực hành khai báo mảng và các phương thức cơ bản.

// Khai báo một mảng mySkills chứa các chuỗi: "JavaScript", "React", "Node.js".
const mySkills: string [] = ["JavaScript","React","Node.js"]
// Thêm kỹ năng "TypeScript" vào cuối mảng.
mySkills.push("Typescript");
// Tạo một mảng mới upperSkills bằng cách dùng hàm .map() để chuyển tất cả kỹ năng thành chữ hoa (Uppercase).
const upperSkills: string [] = mySkills.map((item)=> {
  return item.toUpperCase();
})
console.log(upperSkills);

// Thử thách: Hãy khai báo một mảng rỗng projects và thử push một giá trị vào đó 
const projects = []; // khi không khai báo kiểu dữ liệu projects mang kieu du lieu any: co the la bat ki thu gì
projects.push("JavaScript"); // 
console.log(projects)
// mà không khai báo kiểu dữ liệu trước. Quan sát xem TypeScript có báo lỗi không? --không báo lỗi nếu k kích hoạt Strich Mode trong ts config





// Bài tập 2: Hệ thống phân loại giao dịch (Nâng cao - Union & Interfaces)

// Mục tiêu: Kết hợp Interface và Array để quản lý dữ liệu thực tế trong Wealth Tracker.

// Định nghĩa Interface Transaction gồm: id (string), amount (number), và category (string).
interface Transaction {
  id: string;
  amount: number;
  category: string;
}
// Tạo một mảng history chứa các đối tượng tuân thủ Interface trên.
const history: (Transaction | string)[] = [
    { id: "TX01", amount: 500000, category: "Food" },
    "--- Kết thúc giao dịch buổi sáng ---",
    { id: "TX02", amount: 2000000, category: "Electronics" },
    "okokokokokokok",
    "learnTypeScriptWithHaruto"
];
// Viết một hàm filterHighValue(txs: Transaction[]) trả về một mảng 
// mới chỉ chứa các giao dịch có amount > 1000000.
function filterHightValue (txs:(Transaction | string) []) {
  return txs.filter((item)=> {
     return typeof item !== "string" && item.amount > 1000000;
  });
}
console.log(history)
console.log(filterHightValue(history));

// Thử thách: Sửa kiểu của history thành mảng hỗn hợp (Transaction | string)[] 
// để có thể chèn thêm các chuỗi ghi chú (notes) vào giữa danh sách giao dịch.
