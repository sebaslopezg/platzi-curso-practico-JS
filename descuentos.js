const coupons = [
    {
        name: "hola", 
        discount: 15
    },

    {
        name: "chao_xD", 
        discount: 25
    },

    {
        name: "xD._.uwu", 
        discount: 30
    }
];


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function mostrar(messege){
    const resultP = document.getElementById("resultP");
    resultP.innerText = messege;
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const coupon = document.getElementById("inputCoupon");
    const couponValue = coupon.value;
    

    const isCouponValueValid = function(coupon){
        return coupon.name == couponValue;
    }
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if(!userCoupon){
        mostrar("El cupón: " + couponValue + " no es válido");
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        mostrar("El precio con descuento son: " + precioConDescuento + " USD");
    }
    
}