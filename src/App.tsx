import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '~/screens/Navigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '~/modules';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="default" />
      <Navigator />
    </Provider>
  );
};

export default App;
