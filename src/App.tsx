import {createBrowserRouter} from 'react-router';
import {RouterProvider} from 'react-router/dom';

import GamePage from '@/pages/Game';
import HomePage from '@/pages/Home';
import routes from '@/routes';

const router = createBrowserRouter([
  {
    path: routes.home,
    Component: HomePage,
  },
  {
    path: routes.game,
    Component: GamePage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
