function isEmail(email) {
    var isValid = false;
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(email)) {
        isValid = true;
    }
    return isValid;
}

function check() {
    var email = document.getElementById('email').value;
    var psw = document.getElementById('psw').value;
    var psw_repeat = document.getElementById('psw-repeat').value;

    //check
    if (isEmail(email)) {
        if (psw == psw_repeat) {
            alert(' Tạo tài khoản thành công! Vui lòng nhập mã xác nhận được gửi tới ' + email);
            location.reload();
        } else {
            alert('Vui lòng nhập hai mật khẩu trùng nhau!');
            location.reload();
        }
    } else {
        alert('email ' + email + ' không tồn tại trên hệ thống');
        location.reload();
    }
}

function login() {
    var email = document.getElementById('email').value;
    var psw = document.getElementById('psw').value;
    var psw_repeat = "123";
    //check
    if (isEmail(email)) {
        if (psw == psw_repeat && email == "dangthpc04349@fpt.edu.vn") {
            alert("Đăng nhập thành công!");
            window.location = "home.html";
        } else {
            if (email != "dangthpc04349@fpt.edu.vn") {
                alert('Vui lòng kiểm tra lại email hoặc mật khẩu đăng nhập!');
                location.reload();
            } else if ((psw != psw_repeat)) {
                alert('Vui lòng kiểm tra lại email hoặc mật khẩu đăng nhập!');
                location.reload();
            }
        }
    } else {
        alert('email ' + email + ' không tồn tại trên hệ thống');
        location.reload();
    }
    //check

}