// Dependencies
import { ReactElement } from "react";

// Hooks
import { useGetProductList } from "./hooks";

export const ProductList = (): ReactElement => {
  const [status, productList] = useGetProductList()
  return (
    <div className="grid grid-cols-3 gap-6">
      {
        productList.map((product: any) => {
          return (
            <div
              key={product.id}>
              <img src={product.picture} alt={ product.name }/>
              <p>{ product.name }</p>
              <p>{ product.price }</p>
            </div>
          )
        })
      }
    </div>
  )
}
