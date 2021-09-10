// Dependencies
import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import { ProductPage } from "../app/products/infrastructure/ui/pages/products";
import { ProductDetailPage} from "../app/products/infrastructure/ui/pages/product-detail";

const AppRouter = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/product/:id" exact={true}>
          <ProductDetailPage />
        </Route>
        <Route path="/">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
