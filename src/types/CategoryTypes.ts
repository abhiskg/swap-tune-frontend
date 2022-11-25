export interface CategoryInputType {
  categoryName: string;
  image: string;
}

export interface CategoryDataType extends CategoryInputType {
  _id: string;
}
