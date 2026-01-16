import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import dashReducer from '../features/dashboard/dashSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;