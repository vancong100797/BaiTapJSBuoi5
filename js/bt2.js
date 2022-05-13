const GiakW1_50 = 500;
const GiakW51_100 = 650;
const GiakW101_200 = 850;
const GiakW201_350 = 1100;
const GiakWTren350 = 1300;

// Cách 1
function tinhTienDien() {
    var hoTen = document.getElementById("hoTen").value;
    var soKW = document.getElementById("kW").value;
    var tinhTien = 0;

    if (0 < soKW && soKW <= 50) {
        tinhTien = soKW * GiakW1_50;
    }
    else if (50 < soKW && soKW <= 100) {
        tinhTien = 50 * GiakW1_50 + (soKW - 50) * GiakW51_100;
    }
    else if (100 < soKW && soKW <= 200) {
        tinhTien = 50 * GiakW1_50 + 50 * GiakW51_100 + (soKW - 100) * GiakW101_200;
    }
    else if (200 < soKW && soKW <= 350) {
        tinhTien = 50 * GiakW1_50 + 50 * GiakW51_100 + 100 * GiakW101_200 + (soKW - 200) * GiakW201_350;
    }
    else if (350 < soKW) {
        tinhTien = 50 * GiakW1_50 + 50 * GiakW51_100 + 100 * GiakW101_200 + 150 * GiakW201_350 + (soKW - 350) * GiakWTren350;
    }
    else {
        alert("kW không hợp lệ");
        tinhTien = 0;
    }
    

    document.getElementById("tienDien").innerHTML = "Tên khách hàng: " + hoTen + "<br> Số kW: " + soKW + " kW" + "<br> Giá tiền điện: " + tinhTien.toLocaleString() + " VND";
}


// Cách 2
// function tinhTienDien() {
//     var hoTen = document.getElementById("hoTen").value;
//     var soKW = document.getElementById("kW").value;

//     var tinhTien = tinhTienKW(soKW, GiakW1_50, GiakW51_100, GiakW101_200, GiakW201_350, GiakWTren350);

//     document.getElementById("tienDien").innerHTML = "Tên khách hàng: " + hoTen + "<br> Số kW: " + soKW + " kW" + "<br> Giá tiền điện: " + tinhTien.toLocaleString() + " VND";
// }

// function tinhTienKW(soKW, kW1_50, kW51_100, kW101_200, kW201_350, kVTren350) {
//     if (0 < soKW && soKW <= 50) {
//         return soKW * kW1_50;
//     }
//     else if (50 < soKW && soKW <= 100) {
//         return 50 * kW1_50 + (soKW - 50) * kW51_100;
//     }
//     else if (100 < soKW && soKW <= 200) {
//         return 50 * kW1_50 + 50 * kW51_100 + (soKW - 100) * kW101_200;
//     }
//     else if (200 < soKW && soKW <= 350) {
//         return 50 * kW1_50 + 50 * kW51_100 + 100 * kW101_200 + (soKW - 200) * kW201_350;
//     }
//     else if (350 < soKW) {
//         return 50 * kW1_50 + 50 * kW51_100 + 100 * kW101_200 + 150 * kW201_350 + (soKW - 350) * kVTren350;
//     }
//     else {
//         alert("kW không hợp lệ");
//         return 0;
//     }
// }