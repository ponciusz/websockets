import Loadable from 'react-loadable';
import Loading from '../../../components/Loader';

const Game = Loadable({
  loader: () => import('./Game'),
  loading: Loading,
});

export default Game;
