import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddScreen from './screens/AddScreen';
import SearchScreen from './screens/SearchScreen';
import DisplayScreen from './screens/DisplayScreen';
import ZoomScreen from './screens/ZoomScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Add"
        component={AddScreen}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}