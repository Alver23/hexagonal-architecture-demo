import {ReactElement} from "react";
import {useHistory} from "react-router-dom";

import { ProductDetail } from "@ecommerce/app/products/infrastructure/ui/containers/product-detail";

export const ProductDetailPage = (): ReactElement => {
  const history = useHistory();
  return (
    <div>
      <button className="bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2" type="button" onClick={() => history.goBack()}>
        Ir al home
      </button>
      <ProductDetail />
    </div>
  );
}
