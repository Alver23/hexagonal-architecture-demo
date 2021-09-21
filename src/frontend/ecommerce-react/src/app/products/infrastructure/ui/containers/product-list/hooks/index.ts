import { ProductListCommand, productRepository, ProductEntity } from "shared-modules";

// Hooks
import { useFetch } from '@ecommerce/hooks/use-fetch';
import { STATUS_TYPES } from '@ecommerce/commons/app';


const productListCommand =  new ProductListCommand(productRepository);

export const useGetProductList = (): [STATUS_TYPES, ProductEntity[]] => {
  const getProducts = () => {
    return productListCommand.execute()
  }

  const initialState = {
    data: [],
  };

  const [state] = useFetch(getProducts, [], initialState);
  const { status, data } = state;

  return [status, data]

}
