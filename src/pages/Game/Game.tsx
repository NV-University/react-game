import {useNavigate} from 'react-router';

import Board from '@/components/Board';
import Layout from '@/components/Layout';

import {GameProvider} from '@/context';

function GamePage() {
  const navigate = useNavigate();

  return (
    <Layout title="Game page">
      <button onClick={() => navigate(-1)}>Back</button>

      <GameProvider>
        <Board />
      </GameProvider>
    </Layout>
  );
}

export default GamePage;
