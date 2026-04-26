// Bài tập 1: Xây dựng hệ thống Logger (Cơ bản)
// Yêu cầu: Tạo một hệ thống log đơn giản bằng cách kết hợp thông tin log và thông tin thời gian.
// Định nghĩa type LogInfo gồm: message (string) và level ("INFO" | "WARN" | "ERROR").
type LogInfo = {
  message: string;
  level: "INFO" | "WANT" | "ERROR";
}
// Định nghĩa type LogTimestamp gồm: timestamp (Date).
type LogTimestamp = {
  timestamp: Date;
}
// Tạo type FinalLog bằng cách giao thoa hai type trên.
type FinalLog = LogInfo & LogTimestamp;

// Viết hàm printLog(log: FinalLog) để in ra thông tin log theo định dạng: [TIMESTAMP] [LEVEL]: MESSAGE.
function printLog(log: FinalLog) {
    console.log(`1/ ${log.timestamp} ${log.level}: ${log.message}.`);
}
const finalLog1: FinalLog = {
  message: "đăng nhập thành công!!",
  level: "INFO",
  timestamp: new Date()
}
printLog(finalLog1);

// Bài tập 2: Quản lý giao dịch Wealth Tracker (Nâng cao)
// Yêu cầu: Trong ứng dụng quản lý tài chính, một giao dịch chuyển khoản (Transfer) thực chất là 
// sự kết hợp của hai hành động: Trừ tiền và Cộng tiền.

// Định nghĩa Interface BaseTransaction: id (string), amount (number).
interface BaseTransaction {
  id: string;
  amount: number;
}
// Định nghĩa Interface BankDetails: bankName (string), accountNumber (string).
interface BankDetails {
  bankName: string;
  accountNumber: string;
}
// Tạo type TransferTransaction bằng cách kết hợp BaseTransaction và BankDetails.
type TransferTransaction = BaseTransaction & BankDetails;
// Thử thách: Hãy thử tạo một đối tượng myTransfer và xem điều gì xảy ra nếu bạn thiếu 
// thuộc tính accountNumber.
const myTransfer:TransferTransaction = {
  id: "DH72399000",
  amount: 666,
  bankName: "HaruBank (HB)",
  accountNumber: "999" // typescript báo lỗi vì thiếu account number
}
const printTransfer = ((myTransfer: TransferTransaction)=> {
    console.log(`2/ id: ${myTransfer.id},amount: ${myTransfer.amount}, bank's name: ${myTransfer.bankName}, account number: ${myTransfer.accountNumber}`);
})
printTransfer(myTransfer);

// Bài tập 3: Xử lý API Response & Xung đột kiểu (Thực tế)
// Yêu cầu: Đây là bài tập giúp bạn hiểu về lỗi never khi có xung đột.

// Bạn có một hệ thống cũ định nghĩa User với id: number.
type UserOld = {
  id: number
}
// Hệ thống mới (UUID) định nghĩa User với id: string.
type UserNew = {
  id: string;
}
// Hãy tạo một type MergedUser là giao của cả hai.
type MergedUser = UserOld & UserNew;
// const user3: MergedUser = {
//   id: "test" 
// }
// Câu hỏi: Bạn có thể tạo được một object từ MergedUser không? Tại sao?
// Một thuộc tính không thể cùng tên (id) vì TypeScript 
// sẽ tạo ra kiểu 'never' vì một giá trị không thể vừa là string vừa là number.


// Giải pháp: Hãy dùng Intersection để tạo một Admin vừa có các thuộc tính của User (hệ thống mới), 
// vừa có thêm mảng permissions: string[].
interface AdminSystem  {
   id :string;
   username: string;
   email: string;
}
interface AdminPermission {
  permissions: string []
  accessLevel: number;
}
type Admin = AdminSystem & AdminPermission;
const adminLevel1 = {
  id: "550e8400-e29b-41d4-a716-446655440000",
    username: "haruto2804",
    email: "ngobao.software@gmail.com",
    permissions: ["CREATE_USER", "DELETE_POST", "VIEW_ANALYTICS"],
    accessLevel: 99
}
console.log(`3/ Admin ${adminLevel1.username} đã được khởi tạo với level ${adminLevel1.accessLevel}`);