function chan_le() {

    var a = document.querySelector('#a').value;

    a = parseFloat(a);

    var kt;
    if (a % 2 == 0) {
        kt = "số chẵn";

    } else {
        kt = "số lẻ";

    }
    document.querySelector('#kq').innerHTML = kt;
}