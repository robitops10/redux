import { combineReducers } from 'redux';

import bugsReducer from './bugs';
import projectsReducer from './projects';

const reducer = combineReducers({
	bugs: bugsReducer,
	projects: projectsReducer
});


export default reducer;
