/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const width = Dimensions.get('window').width;

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}> {title} </Text>
      <View style={StyleSheet.cartContainer}>
        <FontAwesomeIcon
          icon={faShoppingCart}
          size={HEADER_ICON_SIZE}
          color="#fff"
          style={{paddingLeft: width / 1.6, top: 4}}
        />
      </View>
    </View>
  );
};

export default Header;

const HEADER_ICON_SIZE = 26;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#1e88e5',
    justifyContent: 'center',
    paddingLeft: 80,
  },
  cartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: width / 2.7,
  },
});
