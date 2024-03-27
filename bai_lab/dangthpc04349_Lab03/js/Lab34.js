var a = null,
    b = null,
    o = null;

function toan_hang(x) {
    if (a == null)
        a = x;
    else
        b = x;
}

function toan_tu(x) {
    o = x;
}

function thuc_hien(x) {
    var kq = 0;
    switch (o) {
        case '+':
            alert(a + " + " + b + " = " + (a + b));
            break;
        case '-':
            alert(a + " - " + b + " = " + (a - b));
            break;
        case 'x':
            alert(a + " x " + b + " = " + (a * b));
            break;
        case ':':
            alert(a + " : " + b + " = " + (a / b));
            break;
        default:
            lam_lai();

    }
}

function lam_lai() {
    a = null;
    b = null;
    o = null;

}