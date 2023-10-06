import React from 'react';
import {Image, Pressable, SafeAreaView,} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialIcons, Feather, AntDesign} from '@expo/vector-icons';

const Colors = {
    primary: '#4f4bb0',
    yellow: '#f6a241'
}

export const Design3Screen = () => {
    return <>
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content}>
                    <View style={styles.nav}>
                        <MaterialIcons name="keyboard-arrow-left" size={30} color={'black'}/>
                        <Text style={styles.navTitle}>Product</Text>
                        <Feather name="shopping-bag" size={24} color="black"/>
                    </View>
                    <View style={styles.prodContainer}>
                        <Image style={styles.prodImage} source={require('../../assets/design3_person.png')}/>
                        <View style={styles.prodHeart}>
                            <AntDesign name="hearto" size={24} color="white"/>
                        </View>
                    </View>
                    <View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                Vision naire lavande
                            </Text>
                            <Text style={styles.pricing}>
                                $60.00
                            </Text>
                        </View>
                        <View style={styles.sizeContainer}>
                            <View style={styles.sizeItem}>
                                <Text style={styles.sizeText}>XXS</Text>
                            </View>
                            <View style={styles.sizeItem}>
                                <Text style={styles.sizeText}>M</Text>
                            </View>
                            <View style={styles.sizeItem}>
                                <Text style={styles.sizeText}>L</Text>
                            </View>
                            <View style={styles.sizeItem}>
                                <Text style={styles.sizeText}>XL</Text>
                            </View>
                        </View>
                        <Text style={styles.bodyText}>
                            Good question Francesca Morelli, my answer may not be the most popular, that you will hear
                            because of the term
                        </Text>
                    </View>
                </View>
                <Pressable style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Add to card
                    </Text>
                </Pressable>
            </SafeAreaView>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 30,
    },
    safeArea: {
        flex: 1,
        position: 'relative'
    },
    content: {
        paddingHorizontal: 30,
    },
    nav: {
        justifyContent: 'space-between',
        marginTop: 20,
        flexDirection: 'row'
    },
    navTitle: {
        fontSize: 20,
        textTransform: 'uppercase',
    },
    prodContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    prodImage: {
        height: 300,
        width: 300,
        borderRadius: 150,
        objectFit: 'cover',
    },
    prodHeart: {
        backgroundColor: Colors.yellow,
        color: '#fff',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 50,
    },
    titleContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        flex: 1,
        textTransform: 'capitalize',
    },
    pricing: {
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 20,
    },
    sizeContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sizeItem: {
        margin: 5,
        height: 70,
        width: 70,
        borderRadius: 35,
        borderColor: '#e0dfdf',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sizeText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#807f7f',
    },
    bodyText: {
        marginTop: 20,
        fontSize: 16,
        color: '#252424'
    },
    buttonContainer: {
        backgroundColor: Colors.primary,
        paddingVertical: 25,
        paddingHorizontal: 20,
        position: 'absolute',
        width: '100%',
        bottom: 0,
    },
    buttonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 20,
        fontWeight: '900'
    }
});