// Viết một hàm processPayment(payment: PaymentMethod) sử dụng switch...case để in ra thông tin thanh toán tương ứng.
function processPayment(paymentMethod) {
    switch (paymentMethod.type) {
        case "card":
            console.log(`Đang xử lí giao dịch cho tài khoản ngân hàng có mã là: ${paymentMethod.cardNumber} và số CVV là: ${paymentMethod.cvv}`);
            break;
        case "wallet":
            console.log(`Đang xử lí giao dịch cho ví điện tử ${paymentMethod.walletName} của số điện thoại ${paymentMethod.phoneNumber}`);
            break;
        case "cash":
            console.log("Đang xử lí giao dịch bằng tiền mặt! Vui lòng chờ!");
            break;
    }
}
//test function processPayment
const creditCard1 = {
    type: "card",
    cardNumber: 1241232123123,
    cvv: 999
};
const EWallet1 = {
    type: "wallet",
    walletName: "Momo",
    phoneNumber: "0394782666"
};
const Cash1 = {
    type: "cash"
};
processPayment(creditCard1);
processPayment(EWallet1);
processPayment(Cash1);
// Thử thách nâng cao:
// Tạo một biến initialState bằng cách sử dụng as const. 
const initState = {
    status: "idle"
};
function renderUI(state) {
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
            const _exhaustiveCheck = state;
            return _exhaustiveCheck;
    }
}
renderUI({ status: "success", data: { userId: "haruto_01", createdAt: new Date() } });
export {};
//# sourceMappingURL=05_literals_exercise.js.map