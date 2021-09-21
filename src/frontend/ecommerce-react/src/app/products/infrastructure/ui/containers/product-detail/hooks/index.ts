import {ProductDetailCommand, ProductEntity, productRepository} from "shared-modules";

// Hooks
import { useFetch } from '@ecommerce/hooks/use-fetch';
import { STATUS_TYPES } from "@ecommerce/commons/app";


const productDetailCommand =  new ProductDetailCommand(productRepository);

export const useGetProductDetail = (id: string): [STATUS_TYPES, ProductEntity] => {
  const getProduct = () => {
    return productDetailCommand.execute(id);
  }

  const initialState = {
    data: {},
  };

  const [state] = useFetch(getProduct, [], initialState);
  const { status, data } = state;

  return [status, data]

}
