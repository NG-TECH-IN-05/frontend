import { configureStore } from '@reduxjs/toolkit'
import exempleReducer from '@/store/slices/ExempleSlice'
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    exemple: exempleReducer,

    // [MainApi.reducerPath]: MainApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
