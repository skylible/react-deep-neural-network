import { BUILD_NEURAL_NETWORK, ADD_LAYER, SET_NEURON_COUNT } from '../constants/actionTypes'

let hiddenLayerId = 0
export const addHiddenLayer = () => ({
  type: ADD_LAYER,
  id: hiddenLayerId++,
})
