// Dependencies
import { ReactElement } from 'react';

// Containers
import { ProductList } from "@ecommerce/app/products/infrastructure/ui/containers/product-list";

export const ProductPage = (): ReactElement => {

  return (
    <div className="container w-full m-auto p-4">
      <div className="flex flex-col items-center">
        <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Lista de productos</h1>
        <ProductList />
      </div>
    </div>
  );
}
