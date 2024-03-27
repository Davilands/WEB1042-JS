function kiem_tra() {
    var h = document.getElementById("ho");
    if (h.value.length == 0) {
        alert("Vui lòng nhập họ!");

    }
    var t = document.getElementById("ten");
    if (t.value.length == 0) {
        alert("Vui lòng nhập tên!");
    }
    var n = document.getElementById("ngay");
    if (n.value == "") {
        alert("Vui lòng chọn ngày!");
    }
    var gioitinh = document.getElementsByName("gt");
    if (gioitinh[0].checked && gioitinh[1].checked) {
        alert("Vui lòng chọn giới tính!");
    }
    var s = document.getElementById("sdt");
    if (s.value.length < 10 || s.value.length > 11) {
        alert("Vui lòng nhập 10 đến 11 số!");
    }
    var ch = document.getElementById("check");
    var c = 0;
    for (var i = 0; i < ch.length; i++) {
        if (ch[i].checked) {
            d++;
        }
    }
    if (d < 1) {
        alert("Vui lòng chọn 1 sở thích!");
    }
}

function xuat(check) {
    var c = document.getElementById("hb");
    c.style.display = check ? "" : "none";
}