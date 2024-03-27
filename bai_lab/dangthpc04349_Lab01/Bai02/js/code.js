function chu_vi_dien_tich() {

    //lấy dữ liệu từ id #cd và #cr
    var a = document.querySelector('#cd').value;
    var b = document.querySelector("#cr").value;

    //2. chuyển kiểu dữ liệu về dạng số
    a = parseFloat(a);
    b = parseFloat(b);

    //tính chu vi và diện tích
    var x, y;
    x = (a + b) * 2;
    y = a * b;

    //gán giá trị cho id #chu_vi và #dien_tich
    document.querySelector('#chu_vi').innerHTML = x;
    document.querySelector('#dien_tich').innerHTML = y;
}