const availableCoupons = [
  { code: "ABC123", discount: 10 },
  { code: "DESC15", discount: 15 },
  { code: "OFERTA20", discount: 20 },
];

const calcularPrecioConDescuento = (precio, descuento, coupon) => {
  const porcentajeDescuento = descuento + coupon;
  const porcentajePrecioConDescuento = 100 - porcentajeDescuento;
  console.log({
    precio,
    descuento,
    coupon,
    porcentajeDescuento,
    porcentajePrecioConDescuento,
  });
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  const totalDescuento = precio - precioConDescuento;
  
  return { precioConDescuento, porcentajeDescuento, totalDescuento };
};

const onClickButtonPriceDiscount = () => {
  const priceInput = document.getElementById("input-price");
  const price = parseFloat(priceInput.value) || 0;

  const discountInput = document.getElementById("input-discount");
  const discount = parseFloat(discountInput.value) || 0;

  const couponInput = document.getElementById("input-coupon");
  const coupon = couponInput.value;

  let couponDiscount = availableCoupons
    .filter((x) => x.code == coupon)
    .map((ele) => ele.discount);
  couponDiscount = couponDiscount.shift();
  couponDiscount = couponDiscount ? couponDiscount : 0;
  console.log(couponDiscount);

  priceValues = calcularPrecioConDescuento(price, discount, couponDiscount);
  document.getElementById("price-result").innerText =
    "El precio final a pagar es de: $ " + priceValues.precioConDescuento;
  document.getElementById("porcentage-save").innerText =
    "El porcentaje total aplicado es de: " +
    priceValues.porcentajeDescuento +
    "%";
    document.getElementById("price-save").innerText =
    "Usted ahorro: $ " + priceValues.totalDescuento;
};
