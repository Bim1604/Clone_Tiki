/* eslint-disable prettier/prettier */
import {Image, Text, View,Button} from 'react-native';
import React from 'react';
import {stylesItem} from '../../styles/home/index';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../actions/cart";

const ProductItem = ({image, name, price,id}) => {
  const dispatch = useDispatch();
  const onPress = (id) =>  {
    console.log(id);
    var postData = {
      productId: id,
      Quantiry: 1,

   };
   let axiosConfig = {
      headers: {
         'Content-Type': 'application/json;',
         "Access-Control-Allow-Origin": "*",
      }
   };
   dispatch(addToCart(postData, axiosConfig));
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
        onPress={() => onPress(id)}
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
        id={item.id}
        name={item.name}
        image={{uri: item.image}}
        price={item.price + ' VND'}
      />
    </View>
  );
};

export default renderItem;
