
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';

// Logger middleware
const logger = store => next => action => {
    console.log('Dispatching:', action);
    let result = next(action);
    console.log('Next state:', store.getState());
    return result;
};

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
