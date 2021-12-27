import React from 'react';
import type { Node } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import Constant from '../../config/Constant';
import SearchBar from '../SearchBar'

const HeaderView: (props) => Node = (props) => {
    return (
        <View style={styles.headerStyle}>
            <SafeAreaView>
                <View style={styles.containerStyle}>
                    <Image
                        style={styles.menuImage}
                        source={require('../../assets/images/menu.png')} />
                    <Text style={styles.titleStyle}>{props.title}</Text>
                    <Image
                        style={styles.plusImage}
                        source={require('../../assets/images/plus.png')} />
                </View>
                <SearchBar
                    onChangeText={props.onChangeText} />
                <View style={styles.dividerView} />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    dividerView: {
        backgroundColor: Constant.DIVIDER_COLOR,
        width: '100%',
        height: 1
    },
    headerStyle: {
        backgroundColor: Constant.COLOR_LIGHT_GRAY,
        width: '100%'
    },
    titleStyle: {
        fontSize: 17,
        lineHeight: 22,
        fontFamily: Constant.FONT_REGULAR,
        fontWeight: '500',
        color: 'black'
    },
    plusImage: {
        width: 18,
        height: 18
    },
    menuImage: {
        width: 16,
        height: 12
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
        alignItems: 'center'
    },
});

export default HeaderView;