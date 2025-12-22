import { CarItem } from "../type/cartType";

export const sumCartItemMrpPrice = (cartItems: CarItem[]) => {
  return cartItems.reduce(
    (acc, item) => acc + item.mrpPrice * item.quantity,
    0
  );
};
export const sumCartItemSellingPrice = (cartItems: CarItem[]) => {
  return cartItems.reduce(
    (acc, item) => acc + item.sellingPrice * item.quantity,
    0
  );
};
