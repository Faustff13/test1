import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import mySaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const Reducers = combineReducers({data: reducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    Reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(mySaga)

export default store