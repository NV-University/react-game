import {useNavigate} from 'react-router';

import Layout from '@/components/Layout';
import routes from '@/routes';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Layout title="Home page">
      Hello!
      <button onClick={() => navigate(routes.game)}>Start game</button>
    </Layout>
  );
}

export default HomePage;
