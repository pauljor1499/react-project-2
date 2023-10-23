import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import UserSlice from "./slices/User";

export const Store = configureStore({
    reducer: {
        Products: ProductSlice.reducer,
        User: UserSlice.reducer,
    },
});
