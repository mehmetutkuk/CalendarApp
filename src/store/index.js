import {configureStore} from '@reduxjs/toolkit';
import {loadState, saveState} from '../api/SessionStorageService';
import userReducer from '../reducers/userSlice';
import layoutReducer from '../reducers/layoutSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    layout: layoutReducer
  },
  preloadedState: loadState()
});
store.subscribe(()=>{
  saveState(store.getState());
});
export default store;