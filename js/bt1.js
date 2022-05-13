// cách 1
function ketQuaTuyenSinh() {
    var fullName = document.getElementById("name").value;
    var diemChuan = document.getElementById("diemChuan").value;
    var diemA = document.getElementById("diemA").value;
    var diemB = document.getElementById("diemB").value;
    var diemC = document.getElementById("diemC").value;
    var khuVucUuTien= document.getElementById("khuVucUuTien").value;
    var doiTuongUuTien= document.getElementById("doiTuongUuTien").value;
    var diemTongKet = 0;
    var ketQua = "";

    diemTongKet = Number(diemA) + Number(diemB) + Number(diemC) + Number(diemKhuVucUuTien(khuVucUuTien)) + Number(diemDoiTuongUuTien(doiTuongUuTien));

    if (diemChuan <= diemTongKet && 0<diemA && 0< diemB && 0<diemC) {
        ketQua="Chúc mừng bạn đã trúng tuyển.";
    } else {
        ketQua="Bạn đã trượt. Xin chia buồn.";
    }
    document.getElementById("ketQua").innerHTML = "Họ Và tên: " + fullName + "<br> Điểm chuẩn: " + diemChuan + "<br> Môn A: " + diemA + "<br> Môn B: " + diemB + "<br> Môn C: " + diemC + "<br> Tổng điểm: " + diemTongKet + "<br>" + ketQua;
}

function diemKhuVucUuTien(value) {
    var khuVuc = 0;
    if (value == "A") {
        khuVuc = 2;
    } else if (value == "B") {
        khuVuc = 1;
    }else if (value == "C"){
        khuVuc = 0.5;
    }else if (value == "X") {
        khuVuc = 0;
    }else{
        alert("Bạn chưa chọn khu vực ưu tiên");
    }
    return khuVuc;
}

function diemDoiTuongUuTien(value) {
    var doiTuong = 0;
    if (value == "1") {
        doiTuong = 2.5;
    } else if (value == "2") {
        doiTuong = 1.5;
    }else if (value == "3"){
        doiTuong = 1;
    }else if (value == "0") {
        doiTuong = 0;
    }else{
        alert("Bạn chưa chọn đối tượng ưu tiên");
    }
    return doiTuong;
}


// Cách 2
// function kQTS() {
//     var fullName = document.getElementById("name").value;
//     var diemChuan = document.getElementById("diemChuan").value;
//     var diemA = document.getElementById("diemA").value;
//     var diemB = document.getElementById("diemB").value;
//     var diemC = document.getElementById("diemC").value;
//     var khuVuc = document.getElementById("kV").value;
//     var doiTuong = document.getElementById("dT").value;

//     diemA = Number(diemA);
//     diemB = Number(diemB);
//     diemC = Number(diemC);
//     khuVuc = Number(khuVuc);
//     doiTuong = Number(doiTuong);

//     var diemTongKet = diemA + diemB + diemC + khuVuc + doiTuong;
//     var kQua = "";

//     if (diemTongKet >= diemChuan && diemA > 0 && diemB > 0 && diemC > 0) {
//         kQua = "đậu";
//     } else {
//         kQua = "trượt";
//     }
//     document.getElementById("ketQua").innerHTML = "tên: " + fullName + "<br> Điểm chuẩn: " + diemChuan + "<br> Điểm tổng kết: " + diemTongKet + "<br> Kết quả: " + kQua;
// }



