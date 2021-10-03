import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import LandingPage from './components/landing-page';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RiskPage from './components/risk-page';
import NewsPage from './components/news-page';

const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <ScrollView scrollEnabled={true}>
//       <View style={styles.container}>
//         <LandingPage />
//         <StatusBar style="auto" />
//       </View>
//     </ScrollView>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="Risk" component={RiskPage} />
        <Stack.Screen name="News" component={NewsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Futura"
  },
});
