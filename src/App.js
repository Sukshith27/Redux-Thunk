import {Provider} from 'react-redux';
import appStore from './utils/appStore';
import CartScreen from './screens/CartScreen';
import Products from './screens/Products';
import Users from './screens/Users';
import Comments from './screens/Comments';

const App = () => {
  return (
    <Provider store={appStore}>
      {/* <CartScreen/> */}
      {/* <Products/> */}
      {/* <Users/> */}
      <Comments/>
    </Provider>
  );
};

export default App;
