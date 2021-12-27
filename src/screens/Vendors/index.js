import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import HeaderView from '../../components/HeaderView';
import Constant from '../../config/Constant';
import ListItem from '../../components/ListItem';

const Vendors: () => Node = () => {

    const [listData, setListData] = useState(Constant.list_data)

    return (
        <View style={styles.containerStyle}>
            <HeaderView
                onChangeText={(text) => {
                    let filteredData = Constant.list_data.filter(function (item) {
                      return item.title.includes(text) || item.location.includes(text) ;
                    });
                  
                    setListData(filteredData);
                }}
                title={'My Vendors'} />
            <FlatList
                data={listData}
                key={listData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <ListItem
                            item={item}
                            index={index} />
                    )
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default Vendors;