import { legacy_createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import { composeWithDevTools } from 'redux-devtools-extension';
import { FC } from 'react';

interface DataProviderProps {
  children?: React.ReactNode;
}
export type AppDispatch = typeof store.dispatch;

const store: Store<any> & {
  dispatch: any;
} = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
