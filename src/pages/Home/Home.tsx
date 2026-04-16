import {useEffect} from 'react';
import {useNavigate} from 'react-router';

import Layout from '@/components/Layout';
import {commonActions, useSelector} from '@/store';
import routes from '@/routes';

function HomePage() {
  const navigate = useNavigate();
  const version = useSelector(state => state.common.version);

  useEffect(() => {
    setTimeout(() => {
      console.log('action');
      void commonActions.setVersion('0.0.2');
    }, 3000);
  }, []);

  console.log('version', version);

  return (
    <Layout title="Home page">
      Hello!
      <button onClick={() => navigate(routes.game)}>Start game</button>
    </Layout>
  );
}

export default HomePage;
