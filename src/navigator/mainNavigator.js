import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile188708Navigator from '../features/UserProfile188708/navigator';
import Settings188707Navigator from '../features/Settings188707/navigator';
import Settings188705Navigator from '../features/Settings188705/navigator';
import SignIn2188703Navigator from '../features/SignIn2188703/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile188708: { screen: UserProfile188708Navigator },
Settings188707: { screen: Settings188707Navigator },
Settings188705: { screen: Settings188705Navigator },
SignIn2188703: { screen: SignIn2188703Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
