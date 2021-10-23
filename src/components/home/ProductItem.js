/* eslint-disable prettier/prettier */
import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {stylesItem} from '../../styles/home/index';

const ProductItem = ({image, name, price, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailsComponent', {
          image: image,
          name: name,
          price: price,
        });
      }}
      style={stylesItem.default.itemContainer}>
      <Image
        resizeMode="contain"
        source={image}
        style={stylesItem.default.itemImage}
      />
      <Text style={stylesItem.default.itemName} numberOfLines={2}>
        {name}
      </Text>
      <Text style={stylesItem.default.itemPrice}>{price}</Text>
    </TouchableOpacity>
  );
};


export default ProductItem;
