const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
};

const onClickButtonPriceDiscount = () => {
  const priceInput = document.getElementById("input-price");
  const price = priceInput.value;

  const discountInput = document.getElementById("input-discount");
  const discount = discountInput.value;

  priceWithDiscount = calcularPrecioConDescuento(price, discount);
  document.getElementById("PriceResult").innerText =
    "El precio final a pagar es de: $ " + priceWithDiscount;
};
