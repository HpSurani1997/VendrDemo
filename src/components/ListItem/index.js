import React from 'react';
import type { Node } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, TextInput } from 'react-native';
import Constant from '../../config/Constant';

const ListItem: (props) => Node = (props) => {

    const { item, index } = props;

    return (
        <View>
            <View style={styles.listContainer}>
                <Image
                    style={styles.listImage}
                    source={item.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>{item.title}</Text>
                    <Text style={styles.descStyle}>{item.location}</Text>
                </View>
            </View>
            <View style={styles.dividerView} />
        </View>
    );
}

const styles = StyleSheet.create({
    dividerView: {
        backgroundColor: Constant.DIVIDER_COLOR,
        marginStart: 27,
        marginEnd: 8,
        height: 1
    },
    descStyle: {
        fontSize: 12,
        lineHeight: 13,
        fontFamily: Constant.FONT_REGULAR,
        color: Constant.COLOR_GRAY
    },
    titleStyle: {
        fontSize: 17,
        lineHeight: 21,
        fontFamily: Constant.FONT_REGULAR,
        fontWeight: '500',
        color: 'black'
    },
    titleContainer: {
        marginStart: 17,
        alignSelf: 'center'
    },
    listImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    listContainer: {
        marginHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 15
    }
});

export default ListItem;