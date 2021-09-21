interface ApiPictureResponse {
  name: string;
  url: string;
}
interface HttpApiProductResponse {
  id: string;
  name: string;
  price: string;
  category: string;
  pictures: ApiPictureResponse[];
}

export default HttpApiProductResponse;
