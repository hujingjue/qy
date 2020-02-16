import {combineReducers} from 'redux'
import plane from 'pages/plane/createPlane/reducer.js'
import city from 'pages/plane/createPlane/cityReducer.js'

export default combineReducers({
    plane,
    city
})