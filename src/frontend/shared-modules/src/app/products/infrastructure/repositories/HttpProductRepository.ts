import { ProductRepository } from "../../domain/respositories/product";
import { Connector } from "../../../../connector";
import { ProductEntity } from "../../domain/entities/product";
import { axiosInstance} from "../../../../axios";

export class HttpProductRepository implements ProductRepository {

  private readonly baseUrl = 'http://localhost:5000/api/products'
  constructor(private readonly httpClient: Connector) {
  }

  async getProducts(): Promise<ProductEntity[]> {
    const { data } = await this.httpClient.get(this.baseUrl);
    return data.map((item: any) => {
      const { pictures, ...otherValues } = item;
      const [ picture ] = pictures;
      return {
        ...otherValues,
        picture,
      };
    })
  }
}

export const productRepository = new HttpProductRepository(new Connector(axiosInstance))
