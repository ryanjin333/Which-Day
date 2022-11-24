import { useEffect } from 'react';
import { StyleSheet, StatusBar, ImageBackground, SafeAreaView, Platform, AppState } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './src/HomeScreen/HomeScreen';
import Swiper from 'react-native-swiper';
import SettingsList from './src/SettingsScreen/SettingsList';
import store from './src/store';


const App = () => {
  
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor('#FFFFFF00'); 
    StatusBar.setTranslucent(true)
    }
   }, []);

  return (
    <Provider store={store}>
      <ImageBackground source={require('./assets/Background.png')} style={styles.backgroundContainer}>
          <Swiper loop={false}>
            <SafeAreaView style={{height: '100%'}}>
              <HomeScreen />
            </SafeAreaView>      
              <SettingsList />
          </Swiper>
      </ImageBackground>
    </Provider>
  );
};

export default App;


const styles = StyleSheet.create({

  backgroundContainer: {
    width: '100%',
    height: '100%',
     resizeMode: 'contain',
     backgroundColor: '#F5F5F5'
,  },  

});
