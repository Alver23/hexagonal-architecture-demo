// Dependencies
import { ReactElement } from "react";
import { useParams } from "react-router-dom";

// Componentes
import { Product } from "@ecommerce/app/products/infrastructure/ui/components/product";
import { Skeleton } from "@ecommerce/components/skeleton";

// Commons
import { STATUS_TYPES } from '@ecommerce/commons/app';

// Hooks
import { useGetProductDetail } from "./hooks";

export const ProductDetail = (): ReactElement => {
  const { id } = useParams<any>();
  const [status, product] = useGetProductDetail(id);
  return (
    <div className="flex flex-wrap m-4">
      {
        status === STATUS_TYPES.LOADING && (
          <Skeleton />
        )
      }
      {
        product?.id && (
          <div className="xl:w-1/3 md:w-1/2 p-4" key={product.id}>
            <Product picture={product.picture} name={product.name} price={product.price} />
          </div>
        )
      }
    </div>
  )
}
