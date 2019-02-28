import Loadable from 'react-loadable';
import Loading from '../../../components/Loader';

const Create = Loadable({
  loader: () => import('./Create'),
  loading: Loading,
});
export default Create;
