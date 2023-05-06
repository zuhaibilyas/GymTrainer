import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image} from 'react-native/Libraries/Image/Image';
import MenuScreen from '../Home/MenuScreen';
import SettingScreen from '../Home/SettingScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="MenuScreen" component={MenuScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
