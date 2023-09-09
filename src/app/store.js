// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import { cartReducer } from '../features/cart/CartSlice.js';
import { inventoryReducer } from '../features/inventory/InventorySlice.js';
import { currencyFilterReducer } from '../features/currencyFilter/CurrencyFilter.js';

// Create and export the store here.
export const store = createStore(combineReducers({
  cart: cartReducer,
  inventory: inventoryReducer,
  currencyFilter: currencyFilterReducer
}));