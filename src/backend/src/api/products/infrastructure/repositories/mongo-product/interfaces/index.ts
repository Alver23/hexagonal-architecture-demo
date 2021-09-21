interface MongoPictureResponse {
  name: string;
  url: string;
}
interface MongoProductResponse {
  _id: string;
  name: string;
  price: string;
  category: string;
  pictures: MongoPictureResponse[];
}

export default MongoProductResponse;
