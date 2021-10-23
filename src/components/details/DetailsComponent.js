/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {width, height} from '../../assets/constant/Screen';
import {
  faAngleLeft,
  faAngleRight,
  faComment,
  faEllipsisH,
  faShoppingCart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const DetailsComponent = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Image Item */}
        <View style={styles.headerImageContainer}>
          <Image
            resizeMode="contain"
            source={route.params.image}
            style={styles.headerImage}
          />
        </View>
      </View>
      {/* Icon Header */}
      <View style={styles.headerIconContainer}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
            style={styles.headerIconCircle}>
            <FontAwesomeIcon icon={faAngleLeft} size={35} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerIconRightContainer}>
          <TouchableOpacity style={styles.headerIconRightCircle}>
            <FontAwesomeIcon icon={faShoppingCart} size={35} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconRightCircle}>
            <FontAwesomeIcon icon={faEllipsisH} size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Body */}
      <View style={styles.bodyContainer}>
        {/* Name Item */}
        <View style={styles.bodyItemNameContainer}>
          <Text style={styles.bodyItemName}>{route.params.name}</Text>
        </View>
        {/* Star */}
        <View style={styles.bodyStarContainer}>
          <FontAwesomeIcon style={styles.bodyStar} icon={faStar} size={17} />
          <FontAwesomeIcon style={styles.bodyStar} icon={faStar} size={17} />
          <FontAwesomeIcon style={styles.bodyStar} icon={faStar} size={17} />
          <FontAwesomeIcon style={styles.bodyStar} icon={faStar} size={17} />
          <FontAwesomeIcon style={styles.bodyStar} icon={faStar} size={17} />
          <Text style={styles.bodyStarText}>(78)</Text>
        </View>
        {/* Money */}
        <View style={styles.bodyMoneyContainer}>
          <Text style={styles.bodyMoneyText}>{route.params.price}</Text>
        </View>
        {/* Hoàn tiền */}
        <View style={styles.bodyReMoneyContainer}>
          <View style={styles.bodyReMoneyContent}>
            <Text style={styles.bodyReMoneyText}>
              Hoàn tiền 15% tối đa 600k/tháng
            </Text>
          </View>
          <View style={styles.bodyReMoneyContent}>
            <Text style={styles.bodyReMoneyText}>Miễn phí vận chuyển</Text>
          </View>
        </View>
      </View>
      {/* Line separate */}
      <View style={styles.lineSeparator} />
      {/* Nav Buy */}
      <View style={styles.footerContainer}>
        <View style={styles.footerCodeSaleContainer}>
          <View style={styles.footerCodeSale}>
            <Text style={styles.footerCodeSaleText}>6 Mã Giảm Giá</Text>
          </View>
          <TouchableOpacity style={styles.footerCodeSaleValue}>
            <Text style={styles.footerCodeSaleValueText}>Giảm 30K</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerCodeSaleValue}>
            <Text style={styles.footerCodeSaleValueText}>Giảm 50K</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerCodeSaleIcon}>
            <FontAwesomeIcon icon={faAngleRight} size={23} color="#A0A0A0" />
          </TouchableOpacity>
        </View>
        {/* Buy Button */}
        <View style={styles.footerBuyContainer}>
          {/* Chat */}
          <TouchableOpacity style={styles.footerChatContainer}>
            <FontAwesomeIcon icon={faComment} size={20} color="#0a67a1" />
            <Text style={styles.footerChatText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerBuyButton}>
            <Text style={styles.footerBuyText}>Chọn Mua</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  // Header
  headerContainer: {
    marginTop: height / 25,
    height: height / 2.2,
    width: width,
  },
  // Image
  headerImageContainer: {
    width: '100%',
    height: '100%',
  },
  headerImage: {
    flex: 1,
  },
  // icon
  headerIconContainer: {
    flexDirection: 'row',
    bottom: height / 2.1,
    justifyContent: 'space-between',
  },
  headerIconRightContainer: {
    flexDirection: 'row',
  },
  headerIconCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#AAAA',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  headerIconRightCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#AAAA',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  // Body
  bodyContainer: {
    flexDirection: 'column',
  },
  bodyItemNameContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  bodyItemName: {
    fontSize: 20,
  },
  // Star
  bodyStarContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  bodyStar: {
    marginLeft: 5,
    color: '#FFD700',
  },
  bodyStarText: {
    color: '#696969',
    fontSize: 16,
    marginLeft: 5,
  },
  // Money
  bodyMoneyContainer: {
    marginLeft: 20,
  },
  bodyMoneyText: {
    fontSize: 26,
    fontWeight: '700',
  },
  // ReMoney
  bodyReMoneyContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
  bodyReMoneyContent: {
    marginTop: 5,
  },
  bodyReMoneyText: {
    fontSize: 17,
  },
  // Line
  lineSeparator: {
    width: width,
    height: 10,
    backgroundColor: '#DCDCDC',
  },
  // Footer
  footerContainer: {
    marginTop: 10,
  },
  footerCodeSaleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#DCDCDC',
  },
  footerCodeSale: {
    marginLeft: 20,
    marginRight: 10,
  },
  footerCodeSaleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerCodeSaleValue: {
    borderWidth: 1,
    padding: 5,
    borderColor: '#0a67a1',
    marginLeft: 15,
  },
  footerCodeSaleValueText: {
    fontSize: 18,
    color: '#0a67a1',
  },
  // Icon
  footerCodeSaleIcon: {
    marginLeft: 10,
  },
  // Buy
  footerBuyContainer: {
    flexDirection: 'row',
  },
  // Chat
  footerChatContainer: {
    width: width / 7,
    height: height / 14,
    borderWidth: 1,
    marginLeft: 20,
    borderColor: '#0a67a1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 8,
    marginRight: 20,
  },
  footerChatText: {
    color: '#0a67a1',
    fontSize: 16,
  },
  // Buy Button
  footerBuyButton: {
    width: width / 1.4,
    height: height / 14,
    marginTop: 10,
    backgroundColor: '#ff414e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  footerBuyText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default DetailsComponent;
