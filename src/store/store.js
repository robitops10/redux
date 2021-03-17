import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middleware/logger';
import api from './middleware/api';

const store = configureStore({ 
	reducer, 
	middleware: [
		logger,
		api
	]  
});

export default store;
