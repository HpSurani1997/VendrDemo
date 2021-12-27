import React from 'react';
import type { Node } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, TextInput } from 'react-native';
import Constant from '../../config/Constant';

const SeachBar: (props) => Node = (props) => {
    return (
        <View>
            <View style={styles.searchContainer}>
                <Image
                    style={styles.searchImage}
                    source={require('../../assets/images/search.png')} />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Search'
                    onChangeText={props.onChangeText}
                    placeholderTextColor={Constant.COLOR_HINT}
                    underlineColorAndroid={'transparent'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        marginLeft: 8
    },
    searchImage: {
        width: 15.5,
        height: 15.5
    },
    searchContainer: {
        marginHorizontal: 16,
        height: 36,
        borderRadius: 10,
        marginTop: 19,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 8,
        marginBottom: 10,
        backgroundColor: Constant.COLOR_DARK_GRAY
    }
});

export default SeachBar;