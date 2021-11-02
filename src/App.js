import React,{useReducer, } from 'react';
import './App.css';
import Layout  from './pages';
import { ToastProvider } from 'react-toast-notifications';
import StoreApi from './utils/storeApi';
import { reducer, initialState } from './context/reducer';
import getActions from './context/actions';
const App = () => {



  const [{ isHovered}, dispatch] = useReducer(
    reducer,
    initialState
  );

  
  const { setIsHovered, resetHovered } = getActions(dispatch);


  return (
      <ToastProvider>
        <StoreApi.Provider value={{isHovered,  setIsHovered, resetHovered }}>
        <Layout/>
        </StoreApi.Provider>
      </ToastProvider>
  );
}

export default App;
