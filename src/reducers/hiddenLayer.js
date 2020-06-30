import { bindActionCreators } from "redux";
import { ADD_LAYER, BUILD_NEURAL_NETWORK, SET_NEURON_COUNT } from '../constants/actionTypes'

const hiddenLayerReducer = (state = [], action) => {
    switch (action.type) {
        case BUILD_NEURAL_NETWORK:
            return state;
        case ADD_LAYER:
            return [
                ...state,
                {
                    id: action.id,
                    layers: [],
                }
            ];
        case SET_NEURON_COUNT:
            return state.map(hiddenLayer =>
                hiddenLayer.id === action.id ? {
                    ...hiddenLayer,
                    layers: new Array(action.neuronCount).fill(0)
                } : hiddenLayer
            );
        default:
            return state;
    }
}

export default hiddenLayerReducer;
