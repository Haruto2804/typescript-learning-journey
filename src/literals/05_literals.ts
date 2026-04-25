/**
 * @file TypeScript Core Mastery: Literal Types & Discriminated Unions
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Detailed guide on Literal Types, Union Types, and Type Narrowing.
 */

/* 5. LITERAL TYPES (STRING, NUMBER, BOOLEAN)                                 */
/* -------------------------------------------------------------------------- */

/**
 * LITERAL TYPES: Cho phép bạn chỉ định chính xác giá trị mà một biến có thể nhận.
 * Thay vì chỉ nói là "string", chúng ta nói chính xác đó là chuỗi "success".
 */

// 1. String Literals
type Status = "pending" | "success" | "error";
let requestStatus: Status = "pending"; 

// requestStatus = "loading"; // ERROR: Type '"loading"' is not assignable to type 'Status'.

// 2. Number Literals
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
const result: DiceRoll = 4;

// 3. Boolean Literals (Thường dùng trong logic toggle phức tạp)
type IsActive = true | false;

/* -------------------------------------------------------------------------- */
/* 5. DISCRIMINATED UNIONS (CẤU TRÚC DỮ LIỆU ĐA HÌNH)                          */
/* -------------------------------------------------------------------------- */

/**
 * DISCRIMINATED UNIONS: Kỹ thuật sử dụng một Literal Type chung (thường là 'type' hoặc 'kind')
 * để phân biệt giữa các Object có cấu trúc khác nhau.
 */

type UploadSuccess = {
  status: "success"; // Discriminant property
  url: string;
};

type UploadError = {
  status: "error";   // Discriminant property
  message: string;
};

type UploadResponse = UploadSuccess | UploadError;

function handleResponse(response: UploadResponse) {
  if (response.status === "success") {
    // TypeScript tự hiểu ở đây response là UploadSuccess
    console.log("File uploaded at: " + response.url);
  } else {
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
} as const;

// Nếu không có 'as const', method sẽ là kiểu 'string', dẫn đến lỗi khi truyền vào hàm yêu cầu Literal.
function makeRequest(url: string, method: "GET" | "POST") {
  console.log(`Sending ${method} request to ${url}`);
}

makeRequest(req.url, req.method); // OK nhờ 'as const'


/* -------------------------------------------------------------------------- */
/* 5. SWITCH CASE & EXHAUSTIVE CHECKING                                       */
/* -------------------------------------------------------------------------- */

/**
 * Khi Union có nhiều hơn 2 kiểu, 'switch' giúp phân loại logic cực kỳ rõ ràng.
 * TypeScript sẽ "thu hẹp" kiểu (Type Narrowing) chính xác trong từng case.
 */

type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string[] };
type ErrorState   = { status: "error"; message: string };

type AppState = LoadingState | SuccessState | ErrorState;

function renderUI(state: AppState) {
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
      const _exhaustiveCheck: never = state;
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