export interface UserDataType {
  _id: string;
  name: string;
  email: string;
  role: "buyer" | "seller" | "admin";
}
