// Dependencies
import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import { ProductListPage } from "@ecommerce/app/products/infrastructure/ui/pages/product-list";
import { ProductDetailPage} from "@ecommerce/app/products/infrastructure/ui/pages/product-detail";

const AppRouter = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/product/:id" exact={true}>
          <ProductDetailPage />
        </Route>
        <Route path="/">
          <ProductListPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
