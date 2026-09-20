/* 
  Hàm 1: Khi di chuột vào hình ảnh (onmouseover)
  - Cập nhật đường dẫn ảnh nền (backgroundImage) của phần tử #image thành src của ảnh được di chuột vào.
  - Cập nhật nội dung văn bản (innerHTML) của phần tử #image thành alt của ảnh đó.
*/
function upDate(previewPic) {
    // 1. Kiểm tra xem sự kiện có kích hoạt đúng không
    console.log("Di chuột vào ảnh:", previewPic.alt, previewPic.src);

    // 2. Lấy phần tử có id là 'image'
    let imageDiv = document.getElementById('image');

    // 3. Thay đổi ảnh nền
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // 4. Thay đổi nội dung chữ thành thuộc tính alt của ảnh
    imageDiv.innerHTML = previewPic.alt;
}

/* 
  Hàm 2: Khi di chuột rời khỏi hình ảnh (onmouseout)
  - Khôi phục ảnh nền của #image về trạng thái ban đầu (rỗng).
  - Khôi phục dòng chữ ban đầu của #image.
*/
function unDo() {
    // 1. Kiểm tra xem sự kiện có kích hoạt đúng không
    console.log("Rời chuột khỏi ảnh");

    // 2. Lấy phần tử có id là 'image'
    let imageDiv = document.getElementById('image');

    // 3. Đặt lại ảnh nền về rỗng
    imageDiv.style.backgroundImage = "url('')";

    // 4. Khôi phục dòng chữ ban đầu
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}