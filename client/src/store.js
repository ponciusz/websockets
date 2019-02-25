import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
