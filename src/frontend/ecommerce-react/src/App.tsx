// Dependencies
import { ReactElement } from 'react';

// Router
import AppRouter from './routes';

const App = (): ReactElement => {
  return (
    <div className="min-h-screen">
      <AppRouter />
    </div>
  );

};

export default App;
