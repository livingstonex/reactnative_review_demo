import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Details from '../screens/details';

const screens = {
    Home: {
        screen: Home,
    },

    Details: {
        screen: Details
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
