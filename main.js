/**
 * Bài Tập 1: Tính Tiền Lương Nhân Viên
 * Đầu Vào
 * - Tạo biến tổng số ngày làm (tongSoNgay) 
 * - Tạo biến lương mỗi ngày : 100,000 VNĐ (luongMoiNgay)
 * Xử Lý:
 * - Số ngày làm = 20 (tongSoNgay=20)
 * - tongLuong = tongSoNgay*luongMoiNgay
 * Đầu Ra: Show kết quả
 */

var tongSoNgay = 20;
var luongMoiNgay = 100000 ;
var tongLuong = tongSoNgay * luongMoiNgay;
console.log ("Tổng Lương Là : " + tongLuong);


/**
 * Bài Tập 2: Tính Giá Trị Trung Bình
 * Đầu Vào
 * - Tạo biến cho 5 chố thực
 * - number1    (VD =1)
 * - number2    (VD =2)
 * - number3    (VD =3)
 * - number4    (VD =4)
 * - number5    (VD =5)
 * Xử Lý:
 * - (number1 + number2 + number3 + number4 + number5) /5
 * Đầu Ra: Show kết quả
 */

var number1 = 1;
var number2 = 2;
var number3 = 3;
var number4 = 4;
var number5 = 5;
var trungBinh = (number1 + number2 + number3 + number4 + number5) /5 ;
console.log("Trung Bình Là : "+ trungBinh);

/**
 * Bài Tập 3: Quy đổi tiền
 * Đầu Vào
 * - Tạo Biến Số USD muốn đổi (usd)
 * - Giá mỗi usd hiện tại 23,5000 ( vnd)
 * Xử Lý:
 * - Số usd muốn đổi = 20 (usd =20)
 * - usd*vnd
 * Đầu Ra: Show kết quả
 */

var usd = 20;
var vnd = 235000 ;
var doiVND = usd*vnd ;
console.log("Tổng Là: " + doiVND );


/**
 * Bài Tập 4: Tính Diện Tích và Chu Vi Hình Chữ Nhật
 * Đầu Vào
 * - Tạo biến nhập chiều dài (chieuDai)
 * - Tạo biến nhập chiều rộng (chieuRong)
 * Xử Lý:
 * Chiều Dài = 3 ( chieuDai = 3)
 * Chiều Rộng = 5  (chieuRong =5)
 * - Diện Tích = chieuDai * chieuRong
 * - Chu Vi = (chieuDai + chieuRong) * 2
 * Đầu Ra: Show kết quả
 */

var chieuDai = 3 ;
var chieuRong = 5;
var dienTich = chieuDai*chieuRong ;
console.log("Diện Tích Là : "+ dienTich)  ;
var chuVi = (chieuDai + chieuRong) * 2 ;
console.log( "Chu Vi Là : " + chuVi)  ;

/**
 * Bài Tập 5: Tính Tổng 2 Ký Số
 * Đầu Vào
 * - Tạo biến nhập 2 Ký Số (n)
 * Xử Lý:
 *  2 Ký Số là 55 (n=55)
 * - Lấy số hàng chục: Math.floor (n%100/10) (hangChuc)
 * - Lấy số hàng đơn vị: n%10 (hangDonVi)
 * - tong2KySo = hangChuc + hangDonVi
 * Đầu Ra: Show kết quả
 */


var n = 55 ;
var hangChuc = Math.floor (n%100/10);
var hangDonVi = n%10
var tong2KySo = hangChuc + hangDonVi ;
console.log("Tổng 2 Ký Số Là : " + tong2KySo);


