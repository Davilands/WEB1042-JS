var btn = document.querySelectorAll("button")

btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        btnitem =event.target
        var product = btnitem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        var productPrice = product.querySelector(".price").innerText
        //console.log(productPrice, productName, productImg)
        addcart(productPrice, productImg, productName)
    })
})
var te=0;
//----Thêm zo
 function addcart(productPrice, productImg, productName){
     var tr = document.createElement("tr");
     var cartItem = document.querySelectorAll("tbody tr")
     te++;
     for(var i=0;i<cartItem.length; i++){
         var productT = document.querySelectorAll(".title")
         if(productT[i].innerHTML == productName){
             alert("Sản Phẩm đã có trong giỏ hàng")
             return
         }
     }
     var trcontent = '<tr><td style="text-align: center;color: white; font-family: cursive; font-size: 20px;font-weight: bolder;"><span class="title">' + te + '</span></td><td style="display: flex; align-items: center;  "><img style="width: 100%; "  src=" ' + productImg + '"></td><td style="text-align: center;color: white; font-family: cursive; font-size: 20px;font-weight: bolder;"><span class="title">' + productName + '</span></td><td style="text-align: center;color: white; font-family: cursive; font-size: 20px;font-weight: bolder;"><p>$<span class="prices">' + productPrice + '</span></p></td><td style="text-align: center;"><input style="width:40px;outline: none;" type="number" value="1" min="1"> </td><td style="text-align: center;color: white; font-family: cursive; font-size: 20px;font-weight: bolder;"><p>$<span class="prices">' + productPrice + '</span></p></td>   <td style="cursor: pointer; text-align: center;color: white; font-family: cursive; font-size: 20px;font-weight: bolder;padding: 40px;"><span class="cart-delete">Xóa</span></td></tr>'
     tr.innerHTML = trcontent
     var cartTable = document.querySelector("tbody")
     // console.log(cartTable)
     cartTable.append(tr)
     tongtien()
     xoa()
 }


 //Tổng tiền

 function tongtien(){
     var cartItem = document.querySelectorAll("tbody tr")
     var totaLC = 0
     for(var i =0 ;i< cartItem.length;i++){
         var inputValue = cartItem[i].querySelector("input").value
         var productPrice = cartItem[i].querySelector(".prices").innerHTML
         totalA = inputValue * productPrice * 1000
         // totalB = totalA.toLocaleString('de-DE')
         totaLC = totaLC + totalA
         // console.log(totaLC)
         // totalD = totaLC.toLocaleString('de-DE')
     }
     var cartTotalA = document.querySelector(".price-total span")
     cartTotalA.innerHTML= totaLC.toLocaleString('de-DE')
     change()
         // console.log(cartTotalA)
 }
//-----------Xóa--------------------------------
function xoa() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
            // console.log(cartitemR)
        })
    }
}

function change() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function () {
            carttotal()
        })
    }
}

function checkout(){
    addcart();
    alert("Thanh toán thành công");
}

