import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import postsSlice from './reducers/posts/postsSlice';
import userSlice from './reducers/users/userSlice';

const rootReducer = combineReducers({
    user: userSlice,
    posts: postsSlice,
})

export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
