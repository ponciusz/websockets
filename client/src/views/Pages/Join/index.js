import Loadable from 'react-loadable';
import Loading from '../../../components/Loader';

const Join = Loadable({
  loader: () => import('./Join'),
  loading: Loading,
});
export default Join;
