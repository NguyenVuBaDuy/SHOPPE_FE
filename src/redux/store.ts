import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

// Tạo store
const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;