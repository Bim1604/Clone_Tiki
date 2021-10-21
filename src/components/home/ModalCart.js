import React, { useState } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, Modal, Button, Pressable, ScrollView } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { removeFromCart } from "../../actions/cart";
import { useDispatch } from 'react-redux';

const ModalCart = ({ modal, setModalVisible,items }) => {
    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeFromCart(id));
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
                onRequestClose={() => {
                    setModalVisible(!modal);
                }}
            >
                <ScrollView>
                {
                        (items.itemList !== undefined) ? 
                            (items.itemList.map((item, index) => 
                            <View style={styles.itemContainer} key={index}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.image}
                                />
                            </View>
                            <View style={styles.contentContainer}>
                                <Text style={styles.contentTitle}>{item.name}</Text>
                                <Text style={styles.contentText}>Số lượng: {item.quantiry}</Text>
                                <View style={styles.iconContainer}>
                                    <Button title="Xóa" onPress={() => removeItem(item.productId)}>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        )) : 
                        <View>
                            <Text style={{color:'black', marginTop: width/2}}>Không có gì trong giỏ</Text>
                        </View>
                        }
                </ScrollView>
                <Button title="Đóng" onPress={() => setModalVisible(!modal)}>
                </Button>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'white'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    imageContainer: {
        width: '40%',
    },
    image: {
        width: 200,
        height: 200,
    },
    contentContainer: {
        flexDirection: 'column',
        width: '60%',
    },
    contentTitle: {
        marginTop: height / 22,
        fontSize: 23,
        color: '#000',
        alignSelf: 'center',
    },
    contentText: {
        color: '#696969',
        fontSize: 17,
        alignSelf: 'center',
        marginBottom: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default ModalCart;