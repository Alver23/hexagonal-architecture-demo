import { ProductDetailCommand, productRepository } from "shared-modules";

// Hooks
import { useFetch } from '@ecommerce/hooks/use-fetch';


const productDetailCommand =  new ProductDetailCommand(productRepository);

export const useGetProductDetail = (id: string) => {
  const getList = () => {
    return productDetailCommand.execute(id);
  }

  const initialState = {
    data: {},
  };

  const [state] = useFetch(getList, [], initialState);
  const { status, data } = state;

  return [status, data]

}
