import { createStore, applyMiddleware} from 'redux'
import Rootreducer from './reducer/index'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import RootSaga from './saga/index'
const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({ // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
  duration : false, // print the duration of each action?
  timestamp : true, // print the timestamp with each action?

  logErrors : true, // should the logger catch, log, and re-throw errors?
 
  diff : true, // (alpha) show diff between states?
});


 const store = createStore(
   Rootreducer,
   applyMiddleware(sagaMiddleware,logger)
   )

   sagaMiddleware.run(RootSaga)
 export default store