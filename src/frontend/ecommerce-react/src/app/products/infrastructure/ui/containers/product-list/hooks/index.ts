import { ProductListCommand, productRepository } from "shared-modules";

// Hooks
import { useFetch } from '@ecommerce/hooks/use-fetch';


const productListCommand =  new ProductListCommand(productRepository);

export const useGetProductList = () => {
  const getList = () => {
    return productListCommand.execute()
  }

  const initialState = {
    data: [],
  };

  const [state] = useFetch(getList, [], initialState);
  const { status, data } = state;

  return [status, data]

}
