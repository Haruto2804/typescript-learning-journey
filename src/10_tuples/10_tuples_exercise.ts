/**
 * @file TypeScript Practice: Tuples Mastery
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Hệ thống bài tập thực hành về Tuple trong TypeScript.
 */

/* ========================================================================== */
/* BÀI TẬP 1: QUẢN LÝ TỌA ĐỘ (BASIC TUPLE)                                    */
/* ========================================================================== */

/**
 * YÊU CẦU:
 * 1. Định nghĩa một Type Alias tên là 'Coordinate' dạng Tuple gồm 2 phần tử [latitude, longitude].
 * 2. Khai báo biến 'hcmCity' với tọa độ: 10.7626, 106.6602.
 * 3. Thử gán một mảng có 3 phần tử vào biến này và quan sát lỗi.
 */

// --- CODE CỦA BẢO TẠI ĐÂY ---


/* ========================================================================== */
/* BÀI TẬP 2: API RESPONSE (NAMED TUPLE & OPTIONAL)                           */
/* ========================================================================== */

/**
 * YÊU CẦU:
 * 1. Định nghĩa Type 'ServiceResponse' là một Named Tuple gồm:
 * - status (number)
 * - message (string)
 * - data (object - không bắt buộc/optional)
 * 2. Tạo một biến 'success' trả về status 200, message "Success".
 * 3. Tạo một biến 'failure' trả về status 404, message "Not Found", kèm data là { error: "Page not exist" }.
 */

// --- CODE CỦA BẢO TẠI ĐÂY ---


/* ========================================================================== */
/* BÀI TẬP 3: WEALTH TRACKER LOGIC (READONLY & DESTRUCTURING)                 */
/* ========================================================================== */

/**
 * Giả sử bạn có một hàm xử lý giao dịch trả về [Số tiền sau thuế, Tên loại giao dịch].
 * * YÊU CẦU:
 * 1. Viết hàm 'processTransaction' nhận vào 1 số (amount) và trả về một Readonly Tuple [number, string].
 * 2. Số tiền trả về sẽ bằng (amount * 0.9). Tên giao dịch là "Taxed Income".
 * 3. Gọi hàm và dùng DESTRUCTURING để lấy ra 2 biến 'finalAmount' và 'label' để in ra console.
 */

// --- CODE CỦA BẢO TẠI ĐÂY ---


/* ========================================================================== */
/* BÀI TẬP 4: CINESTREAM TAGS (REST ELEMENTS)                                 */
/* ========================================================================== */

/**
 * Trong CineStream, một bộ phim có tiêu đề cố định và danh sách các thể loại không giới hạn.
 * * YÊU CẦU:
 * 1. Định nghĩa Type 'MovieTags' là một Tuple với phần tử đầu là 'title' (string), 
 * theo sau là danh sách 'genres' (mảng các string dùng Spread Operator).
 * 2. Khai báo biến 'chainsawMan' sử dụng type này với dữ liệu: "Chainsaw Man", "Action", "Dark Fantasy", "Gore".
 */

// --- CODE CỦA BẢO TẠI ĐÂY ---
//1
type Coordinate = [latitude: number,longitude: number];
//2
let hcmCity: Coordinate = [10.7626,106.6602];
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

let mySecretTuple:  [string, number] = ["Haruto", 2804]; 
mySecretTuple.push("Hack the system"); // Tại sao không lỗi? 

// --- CÁCH KHẮC PHỤC CỦA bạn TẠI ĐÂY ---
// let mySecretTuple2: readonly [string, number] = ["Haruto", 2804];  //thêm readonly ở đây
// mySecretTuple2.push("Hack the system"); //.push sẽ báo lỗi ngay

console.log("Exercises loaded. Happy coding, Haruto!");

/* ========================================================================== */

