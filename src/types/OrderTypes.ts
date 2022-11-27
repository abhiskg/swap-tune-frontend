export interface OrderInputTypes {
  userName: string;
  userEmail: string;
  phoneNo: number;
  productName: string;
  productId: string;
  productImage: string;
  productStatus: "available" | "sold";
  productPrice: number;
  location: string;
}

export interface OrderDataTypes extends OrderInputTypes {
  _id: string;
  orderStatus:
    | "unpaid"
    | "paid"
    | "sold"
    | "processing"
    | "delivered"
    | "canceled"
    | "on-the-way";
}
