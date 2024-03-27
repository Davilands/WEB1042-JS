function chan_le() {
    //var a = document.querySelector('#a').value;
    var a = document.getElementById("a").value;

    var number = parseFloat(a);
    var kt;
    if (number % 2 == 0) {
        kt = "số chẵn";
    } else {
        kt = "số lẻ";
    }
    document.getElementById("kq").innerHTML = kt;
    //document.querySelector('#kq').innerHTML = kt;
}