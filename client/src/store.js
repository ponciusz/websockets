import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from './reducers';
import { init } from './actions/websockets';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});
init(store);

export default store;
