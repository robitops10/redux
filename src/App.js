import { Provider } from 'react-redux';

import store from './store/store';
import Bugs from './components/bugs';


const App = () => {

  return (
    <div> 
    	<Provider store={store} >
	    	<Bugs />
    	</Provider>
    </div>
  );
}
export default App;
