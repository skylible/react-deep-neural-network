import {combineReducers} from 'redux';
import hiddenLayerReducer from './hiddenLayer';

const rootReducer = combineReducers({
    hiddenLayerReducer : hiddenLayerReducer
})

export default rootReducer
