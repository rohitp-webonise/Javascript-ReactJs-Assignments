
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; 
import todoReducer from './reducers/todoReducer';

// Logger middleware
const logger = store => next => action => {
    console.log('Dispatching:', action);
    let result = next(action);
    console.log('Next state:', store.getState());
    return result;
};

const rootReducer = combineReducers({
    todos: todoReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

export default store;
