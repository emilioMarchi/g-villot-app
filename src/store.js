// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/indexReducer'; // Importa tu combinación de reductores
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // o cualquier otro almacenamiento
import logger from 'redux-logger';

const persistConfig = {
    key: 'root',
    storage,
   
  };
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

const customMiddleware = store => next => action => {
  const result = next(action);
  // Llama a persistStore para persistir el estado después de cada cambio en el estado
  persistStore(store);
  return result;
};

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);


export default store;
