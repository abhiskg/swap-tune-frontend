export interface ProductInputTypes {
  productName: string;
  image: string;
  originalPrice: number;
  resalePrice: number;
  condition: string;
  yearOfUse: number;
  location: string;
  description: string;
  categoryId: string;
  sellerName: string;
  sellerEmail: string;
}

export interface ProductDataTypes extends ProductInputTypes {
  _id: string;
  isSellerVerified: boolean;
  status: string;
}
