import { applyMiddleware, createStore } from 'redux'
import animalReducer from './reducer';
import thunk from "redux-thunk";

let store = createStore(animalReducer,applyMiddleware(thunk));

export default store