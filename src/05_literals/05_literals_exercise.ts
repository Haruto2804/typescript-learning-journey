// 🟢 BÀI TẬP 1: CẤU HÌNH GIAO DIỆN (LEVEL: EASY)
// Mục tiêu: Sử dụng Literal Types để giới hạn tùy chọn cấu hình.
// Yêu cầu:
// Định nghĩa một Type tên là ThemeMode chỉ cho phép 3 giá trị: "light", "dark", hoặc "system".
type ThemeMode = "light" | "dark" | "system";
// Định nghĩa một Type tên là FontSize gồm các số: 12, 14, 16.
type FontSize = 12 | 14 |16;
// Tạo một Object UserConfig sử dụng các type trên và đảm bảo nó là readonly.
type UserConfig = {
  readonly theme: ThemeMode;
  readonly size: FontSize;
}
// 🟡 BÀI TẬP 2: HỆ THỐNG THANH TOÁN (LEVEL: MEDIUM)
// Mục tiêu: Áp dụng Discriminated Unions để phân tách logic thanh toán.

// Yêu cầu: Tạo một Union Type tên là PaymentMethod bao gồm:
// CreditCard: Có type: "card", cardNumber: number, và cvv: number.
type CreditCard = {
  readonly type: "card";
  cardNumber: number;
  cvv: number
}
// EWallet: Có type: "wallet", walletName: "Momo" | "ZaloPay", và phoneNumber: string.
type Ewallet = {
  readonly type: "wallet";
  readonly walletName: "Momo" | "ZaloPay";
  phoneNumber: string;
}
// Cash: Có type: "cash" và không có thuộc tính nào khác.
type Cash = {
  readonly type: "cash"
}
type PaymentMethod = CreditCard | Ewallet | Cash;
// Viết một hàm processPayment(payment: PaymentMethod) sử dụng switch...case để in ra thông tin thanh toán tương ứng.
function processPayment(paymentMethod: PaymentMethod) {
  switch(paymentMethod.type) {
    case "card": 
      console.log(`Đang xử lí giao dịch cho tài khoản ngân hàng có mã là: ${paymentMethod.cardNumber} và số CVV là: ${paymentMethod.cvv}`);
      break;
    case "wallet":
      console.log(`Đang xử lí giao dịch cho ví điện tử ${paymentMethod.walletName} của số điện thoại ${paymentMethod.phoneNumber}`);
      break;
    case  "cash": 
      console.log("Đang xử lí giao dịch bằng tiền mặt! Vui lòng chờ!");
      break;
  }
}
//test function processPayment
const creditCard1: CreditCard = {
  type: "card",
  cardNumber: 1241232123123,
  cvv: 999
} 
const EWallet1: Ewallet = {
  type: "wallet",
  walletName: "Momo",
  phoneNumber: "0394782666"
}
const Cash1: Cash = {
  type: "cash"
}
processPayment(creditCard1);
processPayment(EWallet1);
processPayment(Cash1);
// 🔴 BÀI TẬP 3: QUẢN LÝ FORM STATE (LEVEL: HARD)
// Mục tiêu: Kết hợp as const và Discriminated Unions để quản lý trạng thái phức tạp.
// Yêu cầu:
// Bạn đang làm một tính năng gửi Form. Hãy định nghĩa một Type FormState đại diện cho các trạng thái:
// Idle: Trạng thái chờ (status: "idle").
type Idle = {
  status: "idle"
}
// Submitting: Đang gửi (status: "submitting").
type Submitting = {
  status: "submitting"
}
// Success: Thành công (status: "success"), kèm theo một Object data chứa userId và createdAt.
type Success = {
  status: "success"
  data: {
    userId: string;
    createdAt: Date;
  }
}
// Error: Thất bại (status: "error"), kèm theo errorCode: number.
type Error = {
  status: "error";
  errorCode: number;
}
//  FORM STATE UNION: Tập hợp tất cả các trạng thái có thể xảy ra của Form.
type FormState = Idle | Submitting | Success | Error ;

// Thử thách nâng cao:
// Tạo một biến initialState bằng cách sử dụng as const. 
const initState = {
  status: "idle"
} as const

function renderUI(state: FormState) {
  switch (state.status) {
    case "idle":
      console.log("Ready to submit.");
      break;

    case "submitting":
      console.log("Loading... Please wait.");
      break;

    case "success":
      // THÀNH CÔNG: TypeScript cho phép truy cập 'data'
      console.log(`User ${state.data.userId} created at ${state.data.createdAt}`);
      break;

    case "error":
      // THẤT BẠI: TypeScript cho phép truy cập 'errorCode'
      console.log(`Error occurred! Code: ${state.errorCode}`);
      break;
    default:
      /**
       * Kỹ thuật Exhaustiveness Checking (Nâng cao):
       * Đảm bảo mọi case của Union Type đều đã được xử lý.
       */
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
  }
}
renderUI({ status: "success", data: { userId: "haruto_01", createdAt: new Date() } });