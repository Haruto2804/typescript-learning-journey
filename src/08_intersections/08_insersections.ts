/**
 * @file TypeScript Core Mastery: Intersection Types
 * @author Haruto (Ngô Lưu Gia Bảo)
 * @description Hướng dẫn cách kết hợp nhiều kiểu dữ liệu để tạo ra cấu trúc đối tượng phức tạp.
 */

/* 8. BASIC INTERSECTION TYPES (KIỂU GIAO CƠ BẢN)                             */
/* -------------------------------------------------------------------------- */

/**
 * INTERSECTION TYPES: Cho phép gộp nhiều kiểu dữ liệu thành một kiểu duy nhất.
 * Sử dụng ký hiệu '&'. Đối tượng mới phải thỏa mãn TẤT CẢ các điều kiện của các kiểu thành phần.
 * Khác với Union (Hoặc), Intersection mang ý nghĩa (Và).
 */

type Student = {
    name: string;
    studentId: number;
};

type ClubMember = {
    clubName: string;
    role: string;
};

// 1. Kết hợp Student và ClubMember
type ActiveStudent = Student & ClubMember;

const haruto: ActiveStudent = {
    name: "Ngô Lưu Gia Bảo",
    studentId: 202401,
    clubName: "TypeScript Mastery",
    role: "Lead Developer"
}; // OK: Phải có đủ thuộc tính của cả 2 type

/* 8. INTERSECTION VS INTERFACE INHERITANCE                                   */
/* -------------------------------------------------------------------------- */

/**
 * Mặc dù 'interface extends' cũng có tác dụng tương tự, nhưng Intersection (&)
 * cực kỳ mạnh mẽ khi làm việc với Type Aliases và các trường hợp gộp kiểu nhanh.
 */

interface Admin {
    privileges: string[];
}

interface User {
    email: string;
    readonly createdAt: Date;
}

// Tạo kiểu AdminUser bằng cách giao thoa hai Interface
type AdminUser = Admin & User;

const superUser: AdminUser = {
    privileges: ["server:restart", "user:delete"],
    email: "admin@dev.io",
    createdAt: new Date()
};

/* -------------------------------------------------------------------------- */
/* 8. HANDLING CONFLICTS (XỬ LÝ XUNG ĐỘT KIỂU)                                */
/* -------------------------------------------------------------------------- */

/**
 * Khi giao thoa hai thuộc tính cùng tên nhưng khác kiểu dữ liệu cơ bản,
 * TypeScript sẽ tạo ra kiểu 'never' vì một giá trị không thể vừa là string vừa là number.
 */

type TypeA = { id: string };
type TypeB = { id: number };

type Conflict = TypeA & TypeB; 

// const errorObj: Conflict = { id: "101" }; 
// ERROR: Type 'string' is not assignable to type 'never'.

/* -------------------------------------------------------------------------- */
/* 8. INTERSECTION TRONG DỰ ÁN THỰC TẾ (API RESPONSES)                        */
/* -------------------------------------------------------------------------- */

/**
 * Áp dụng Intersection để tái sử dụng các cấu trúc dữ liệu dùng chung (Common types).
 */

type Timestamps = {
    createdAt: string;
    updatedAt: string;
};

type ApiResponse<T> = {
    data: T;
    status: "success" | "error";
} & Timestamps; // Luôn đính kèm timestamp vào mọi response

interface Product {
    name: string;
    price: number;
}

const productResponse: ApiResponse<Product> = {
    status: "success",
    data: { name: "Mechanical Keyboard", price: 150 },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z"
};

/* -------------------------------------------------------------------------- */
/* THE GOLDEN RULES FOR HARUTO                                                */
/* -------------------------------------------------------------------------- */

/**
 * 1. COMPOSITION OVER INHERITANCE: Ưu tiên dùng Intersection để lắp ghép các "mảnh" 
 * dữ liệu nhỏ thành một đối tượng lớn, giúp code linh hoạt hơn kế thừa đa tầng.
 * 2. CẨN THẬN NEVER: Luôn kiểm tra xem các kiểu được giao thoa có thuộc tính nào 
 * trùng tên nhưng khác kiểu dữ liệu hay không để tránh lỗi 'never'.
 * 3. READABILITY: Nếu giao thoa quá 3 kiểu dữ liệu, hãy xem xét đặt cho nó một 
 * Type Alias riêng biệt để code dễ đọc hơn.
 */

console.log("Lesson 08: Intersection Types masterclass documented for Haruto.");