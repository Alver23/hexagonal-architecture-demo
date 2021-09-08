// Dependencies
import { ReactElement } from 'react';

// Containers
import { ProductList } from "../../containers/product-list";

export const ProductPage = (): ReactElement => {
  return (
    <div className="container w-full m-auto p-4">
      <div className="flex flex-col items-center">
        <h1>Lista de productos</h1>
        <ProductList />
      </div>
    </div>
  );
}
