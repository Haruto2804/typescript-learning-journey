// Viết hàm printLog(log: FinalLog) để in ra thông tin log theo định dạng: [TIMESTAMP] [LEVEL]: MESSAGE.
function printLog(log) {
    console.log(`1/ ${log.timestamp} ${log.level}: ${log.message}.`);
}
const finalLog1 = {
    message: "đăng nhập thành công!!",
    level: "INFO",
    timestamp: new Date()
};
printLog(finalLog1);
// Thử thách: Hãy thử tạo một đối tượng myTransfer và xem điều gì xảy ra nếu bạn thiếu 
// thuộc tính accountNumber.
const myTransfer = {
    id: "DH72399000",
    amount: 666,
    bankName: "HaruBank (HB)",
    accountNumber: "999" // typescript báo lỗi vì thiếu account number
};
const printTransfer = ((myTransfer) => {
    console.log(`2/ id: ${myTransfer.id},amount: ${myTransfer.amount}, bank's name: ${myTransfer.bankName}, account number: ${myTransfer.accountNumber}`);
});
printTransfer(myTransfer);
const adminLevel1 = {
    id: "550e8400-e29b-41d4-a716-446655440000",
    username: "haruto2804",
    email: "ngobao.software@gmail.com",
    permissions: ["CREATE_USER", "DELETE_POST", "VIEW_ANALYTICS"],
    accessLevel: 99
};
console.log(`3/ Admin ${adminLevel1.username} đã được khởi tạo với level ${adminLevel1.accessLevel}`);
export {};
//# sourceMappingURL=08_insersections.exercise.js.map