import { configureStore } from '@reduxjs/toolkit'
import theme from "./slices/themeSlice";

export const store = configureStore({
    reducer: {
        theme,
    },
})

