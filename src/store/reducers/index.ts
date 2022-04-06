import { combineReducers } from 'redux';
import { reducer as cart } from './cartSlice';

export default combineReducers({
  cart,
});
