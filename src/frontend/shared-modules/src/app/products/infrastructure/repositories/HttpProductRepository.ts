import { ProductRepository } from "../../domain/respositories/product";
import { Connector } from "../../../../connector";
import { ProductEntity } from "../../domain/entities/product";
import { axiosInstance} from "../../../../axios";
import { ProductMapper } from "./mappers/product";

export class HttpProductRepository implements ProductRepository {

  private readonly baseUrl = 'http://localhost:5000/api/products'
  constructor(private readonly httpClient: Connector) {
  }

  async getProducts(): Promise<ProductEntity[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.httpClient.get(this.baseUrl)
          .then(({ data }: any) => data)
          .then((response) => {
            const productList = response.map((item: any) => new ProductMapper(item));
            return productList;
          })
          .then(resolve)
          .catch(reject)
      }, 3000);
    })
  }

  async getProduct(id: string): Promise<ProductEntity> {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const url = `${this.baseUrl}/${id}`;
        this.httpClient.get(url)
          .then(({ data }: any) => data)
          .then((response) => new ProductMapper(response))
          .then(resolve)
          .catch(reject)
      }, 3000)
    })
  }
}

export const productRepository = new HttpProductRepository(new Connector(axiosInstance))
