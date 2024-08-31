import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"; // Use named import for Provider
import CartReducers from "./Feature/Cart";

export const store = configureStore({
    reducer: {
        cart:CartReducers
    }
});
