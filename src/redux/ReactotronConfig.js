import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.useReactNative()
  .configure({ name: 'app_name' })
  .use(reactotronRedux()) //  <- here i am!
  .connect();

export default Reactotron;    