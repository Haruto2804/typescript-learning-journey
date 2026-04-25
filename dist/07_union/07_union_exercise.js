// BÀI TẬP: QUẢN LÝ NỘI DUNG ĐA PHƯƠNG TIỆN (MEDIA MANAGER)
// Yêu cầu: Em hãy viết một đoạn code TypeScript  để thực hiện các công việc sau:
// Viết hàm Xử lý (Type Narrowing): Viết hàm getDisplayLink(item: Media):
function getDisplayLink(item) {
    if (item.type === "movie") {
        return `/watch/movie/${item.id}`;
    }
    else if (item.type === "tv") {
        return `/watch/tv-series/${item.id}`;
    }
}
// Nếu type là "movie", trả về chuỗi: /watch/movie/[id]
// Nếu type là "tv", trả về chuỗi: /watch/tv-series/[id]
// Sử dụng Const Assertion: Tạo một biến FEATURED_VIDEO sử dụng as const với 
// đầy đủ các thông tin trên và gọi hàm getDisplayLink.
const FEATURED_VIDEO = {
    id: 282,
    title: "Chain Saw Man",
    type: "movie", //"anime",               // nếu đổi thành anime sẽ bị lỗi :
    rating: 9.5 // Argument of type '{ readonly id: 282; readonly title: "Chain Saw Man"; 
    // readonly type: "anime"; readonly rating: 9.5; }' is not assignable 
    // to parameter of type 'Media'.
    //Types of property 'type' are incompatible.
    //  Type '"anime"' is not assignable to type 'MediaType'.
};
console.log(getDisplayLink(FEATURED_VIDEO));
export {};
//# sourceMappingURL=07_union_exercise.js.map