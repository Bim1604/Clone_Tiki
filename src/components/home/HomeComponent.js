/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FlatList} from 'react-native-gesture-handler';
import {stylesHome, stylesItem, stylesFilter} from '../../styles/home/index';
import renderItem from './ProductItem';
import section_banner4 from '../../assets/image/Banner4.png';
import section_banner3 from '../../assets/image/Banner3.png';
import data, {utilities} from '../../assets/data/Homefile';
import {apiGetProduct} from '../../assets/constant/api';

const HomeComponent = ({navigation}) => {
  const [foodsFromServer, setFoodsFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getProduct();
    return () => {};
  }, []);

  const getProduct = () => {
    fetch(apiGetProduct)
      .then(res => res.json())
      .then(resJson => {
        setFoodsFromServer(resJson);
      })
      .catch(error => {
        console.log('Error: ', error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="light-content" />
        {/* Header */}
        <View style={stylesHome.default.headerContainer}>
          <View style={stylesHome.default.inputContainer}>
            <FontAwesomeIcon icon={faSearch} size={24} color="#969696" />
            <TextInput
              multiline
              onChangeText={text => setSearchValue(text)}
              value={searchValue}
              style={stylesHome.default.inputText}
              placeholder="Bạn tìm gì hôm nay"
              onPressIn={() => {
                navigation.navigate('SearchComponent');
              }}
            />
          </View>
          <View style={stylesHome.default.cartContainer}>
            <FontAwesomeIcon icon={faShoppingCart} size={24} color="#fff" />
          </View>
        </View>
        {/* Body */}
        <View style={stylesHome.default.bodyContainer}>
          <View style={stylesHome.default.sectionContainer}>
            <Text style={stylesHome.default.sectionTitle}>
              Quần Áo - Máy Tính
            </Text>
            <Image
              source={section_banner4}
              style={stylesHome.default.sectionImage}
            />
            <Image
              source={section_banner3}
              style={stylesHome.default.sectionImage}
            />
            <ScrollView
              horizontal={true}
               showsHorizontalScrollIndicator={false}>
              <View style={stylesFilter.default.filterContainer}>
                {data.map((value, index) => (
                  <View
                    key={index}
                    style={stylesFilter.default.filterImageAndText}>
                    <Image
                      source={value.image}
                      style={stylesFilter.default.filterImage}
                    />
                    <View style={stylesFilter.default.filterContainText}>
                      <Text style={stylesFilter.default.filterText}>
                        {value.name}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={stylesFilter.default.filterDevider}></View>
            <View>
              <Text>Tiện ích</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={stylesFilter.default.filterContainer}>
                {utilities.map((value, index) => (
                  <View
                    key={index}
                    style={stylesFilter.default.filterImageAndText}>
                    <Image
                      source={value.image}
                      style={stylesFilter.default.filterImage}
                    />
                    <View style={stylesFilter.default.filterContainText}>
                      <Text style={stylesFilter.default.filterText}>
                        {value.name}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={stylesFilter.default.filterDevider}></View>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <View style={stylesItem.default.listItemContainer}>
                <FlatList
                  horizontal={true}
                   data={foodsFromServer}
                  renderItem={renderItem}
                  keyExtractor={item => `key-${item.id}`}
                />
              </View>
            )}
            <View style={stylesHome.default.seeMoreContainer}>
              <Text style={stylesHome.default.seeMoreText}>
                Xem thêm 500 Sản Phẩm
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeComponent;
