import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";//비동기 = 미들웨어
import {createLogger} from "redux-logger/src";
import rootReducer  from "../reducers/index"

const logger=createLogger()
const middleware=[thunk,logger]
const store=configureStore({
    reducer:rootReducer,
    middleware:middleware,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})
export default store;