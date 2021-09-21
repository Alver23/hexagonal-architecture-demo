// Dependencies
import { ReactElement } from 'react';

// Router
import AppRouter from './router';

const App = (): ReactElement => {
  return (
    <div className="bg-gray-50 text-gray-600 body-font min-h-screen">
      <AppRouter />
    </div>
  );

};

export default App;
