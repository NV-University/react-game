import {useNavigate} from 'react-router';

import Layout from '@/components/Layout';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Layout title="Home page">
      Hello!
      <button onClick={() => navigate('/game', {replace: true})}>Start game</button>
    </Layout>
  );
}

export default HomePage;
