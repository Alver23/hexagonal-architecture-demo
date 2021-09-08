// Dependencies
import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import { ProductPage } from "../app/products/infrastructure/ui/pages/products";

const AppRouter = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
