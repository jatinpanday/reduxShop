import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from "./reducers/index"

const store = configureStore({
    reducer: reducers,
    devTools: composeWithDevTools()
});
export default store;