import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import counterReducer from "./features/Counter/reducer";
import thunk from "redux-thunk";


let rootReducers = combineReducers({
	counter: counterReducer
});

const composeEnhancers = window._REDUX_DEVTOOL_EXTENSIONS_COMPOSE__ || compose
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
