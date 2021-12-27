import React from 'react';
import type { Node } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Showroom from '../../screens/Showroom';
import Vendors from '../../screens/Vendors';
import { NavigationContainer } from '@react-navigation/native';
import Constants from '../../config/Constant'
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const Navigator: () => Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Vendors"
                screenOptions={{
                    tabBarActiveTintColor: Constants.COLOR_PRIMARY,
                    tabBarInactiveTintColor: Constants.COLOR_GRAY,
                    headerShown: false,
                    tabBarStyle: { backgroundColor: Constants.COLOR_LIGHT_GRAY },
                }}
            >
                <Tab.Screen
                    name="Vendors"
                    component={Vendors}
                    options={{
                        tabBarLabel: 'Vendors',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Image
                                style={styles.tabIcon}
                                source={focused ? require('../../assets/images/vendor_select.png') : require('../../assets/images/vendor.png')} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Showroom"
                    component={Showroom}
                    options={{
                        tabBarLabel: 'Showroom',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Image
                                style={styles.tabIcon}
                                source={focused ? require('../../assets/images/showroom_select.png') : require('../../assets/images/showroom.png')} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 25,
        height: 25
    }
});

export default Navigator;