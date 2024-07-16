import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import rtkStore from './redux/store';
import HomeScreen from './screens/HomeScreen';


const App = () => {
 
   return (
    <Provider store={rtkStore}>
        <HomeScreen />
    </Provider>
  );
};

export default App;