import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import nameReducer from './name-reducer';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
  names: nameReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;