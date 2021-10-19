/* eslint-disable prettier/prettier */
import {Image, Text, View,Button} from 'react-native';
import React from 'react';
import {stylesItem} from '../../styles/home/index';

const ProductItem = ({image, name, price}) => {
  const onPress = () =>  {
    console.log("11")
  };
  return (
    <View style={stylesItem.default.itemContainer}>
      <Image source={image} style={stylesItem.default.itemImage} />
      <Text style={stylesItem.default.itemName} numberOfLines={2}>
        {name}
      </Text>
      <Text style={stylesItem.default.itemPrice}>{price}</Text>
      <Button
        style={stylesItem.default.btnAddCart}
        onPress={() => console.log("11")}
        title="Thêm"

      >
      </Button>
    </View>
  );
};

let renderItem = ({item, index}) => {
  return (
    <View>
      <ProductItem
        key={index}
        name={item.name}
        image={{uri: item.image}}
        price={item.price + ' VND'}
      />
    </View>
  );
};

export default renderItem;
