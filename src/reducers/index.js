import { combineReducers } from 'redux';
import MenuReducer from './MenuReducer';
import OptionReducer from './OptionReducer';
import PageReducer from './PageReducer';

const reducer = combineReducers({
    MenuReducer,
    OptionReducer,
    PageReducer,
});

export default reducer;
