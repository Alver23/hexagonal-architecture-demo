// Dependencies
import { ReactElement } from "react";
import { Link } from "react-router-dom";

// Components
import { Product } from "@ecommerce/app/products/infrastructure/ui/components/product";

import { Skeleton } from "@ecommerce/components/skeleton";

// Commons
import { STATUS_TYPES } from '@ecommerce/commons/app';

// Hooks
import { useGetProductList } from "./hooks";

export const ProductList = (): ReactElement => {
  const [status, productList] = useGetProductList();
  const numberOfSkeleton = Array.from(Array(2).keys());
  return (
    <div className="flex flex-wrap m-4">
      {
        status === STATUS_TYPES.LOADING && (
          numberOfSkeleton.map((index) => (
            <div key={index} className="mx-4">
              <Skeleton />
            </div>
          ))
        )
      }
      {
        productList.map((product) => {
          return (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={product.id}>
              <Product picture={product.picture} name={product.name} price={product.price}>
                <Link className="px-10 bg-purple-600 text-center font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300" to={`product/${product.id}`}>Ver</Link>
              </Product>
            </div>
          )
        })
      }
    </div>
  )
}
