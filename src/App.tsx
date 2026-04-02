import Board from '@/components/Board';
import Layout from '@/components/Layout';

import {GameProvider} from '@/context';

function App() {
  return (
    <Layout title="Main page">
      <GameProvider>
        <Board />
      </GameProvider>
    </Layout>
  );
}

export default App;
