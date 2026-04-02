import {createBrowserRouter} from 'react-router';
import {RouterProvider} from 'react-router/dom';

import GamePage from '@/pages/Game';
import HomePage from '@/pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/game',
    Component: GamePage,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
