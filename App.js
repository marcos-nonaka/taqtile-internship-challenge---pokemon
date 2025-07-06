import List from './pages/List/List.page';
import Details from './pages/Details/Details.page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OverpassSemiBold: require('./assets/fonts/Overpass-SemiBold.ttf'),
    OpenSans: require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pokedex"
            component={List}
            options={{
              headerTitleStyle: {
                fontFamily: 'OverpassSemiBold',
                fontSize: 28,
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={({ route }) => ({
              title: route.params.name,
              headerTitleStyle: {
                fontFamily: 'OverpassSemiBold',
                fontSize: 28,
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
