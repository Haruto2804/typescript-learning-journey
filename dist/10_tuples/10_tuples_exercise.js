/**
 * @file TypeScript Practice: Tuples Mastery
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Hệ thống bài tập thực hành về Tuple trong TypeScript.
 */
//2
let hcmCity = [10.7626, 106.6602];
//hcmCity = [10.7626,106.6602,72.333]; // bị lỗi ngay vì htmCity chỉ đc phép có 2 phần tử là number number
console.log(hcmCity);
//3
/* ========================================================================== */
/* BÀI TẬP NÂNG CAO (CHALLENGE)                                                */
/* ========================================================================== */
/**
 * YÊU CẦU:
 * Tại sao đoạn code dưới đây lại KHÔNG báo lỗi mặc dù chúng ta khai báo Tuple chỉ có 2 phần tử?
 * Bởi vì tuples vẫn cho phép thay đổi các phần tử trong mảng. để khắc phục thì ta cần thêm thuộc tính readonly cho mảng là được!
 * Hãy sửa dòng khai báo để TypeScript ngăn chặn hành động này.
 */
let mySecretTuple = ["Haruto", 2804];
mySecretTuple.push("Hack the system"); // Tại sao không lỗi? 
// --- CÁCH KHẮC PHỤC CỦA bạn TẠI ĐÂY ---
// let mySecretTuple2: readonly [string, number] = ["Haruto", 2804];  //thêm readonly ở đây
// mySecretTuple2.push("Hack the system"); //.push sẽ báo lỗi ngay
console.log("Exercises loaded. Happy coding, Haruto!");
export {};
/* ========================================================================== */
//# sourceMappingURL=10_tuples_exercise.js.map