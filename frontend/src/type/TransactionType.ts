import { Order } from "./orderType";
import { Seller } from "./SellerTypes";
import { User } from "./userType";

export interface Transaction {
  id: number;
  customer: User;
  order: Order;
  seller: Seller;
  date: string;
}
