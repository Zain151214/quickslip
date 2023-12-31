import React from 'react';
import Button from '../components/Button';
import GoBack from '../components/GoBack';
import MainContent from '../components/MainContent';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, StyleSheet, View} from 'react-native';

const TowConfirm = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <GoBack />
        <View>
          <View style={styles.logo_container}>
            <Image
              style={styles.logo}
              source={require('../assets/icons/logo_icon.png')}
            />
          </View>
          <View>
            <MainContent
              heading="Added Vehicle"
              content="Vehicle sent to Dispatch letting them know you are now en route to the lot. If you need to add another vehicle see the options below."
            />
          </View>
          <View>
            <Button
              navigation={navigation}
              title="TAKE TO LOT"
              icon={require('../assets/icons/Garage.png')}
              route="AddTow"
            />

            <Button
              navigation={navigation}
              title="ADD VEHICLE"
              icon={require('../assets/icons/car_icon.png')}
              route="AddTow"
              Vehicle
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TowConfirm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  logo_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 64,
    width: 64,
    marginTop: 32,
    marginBottom: 16,
  },
});
