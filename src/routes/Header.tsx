/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackHeaderProps;

const Header = ({ navigation, route, options, back }: Props) => {
  const title = options.title ?? route.name;
  const isHome = route.name === 'BottomTab';

  return (
    <SafeAreaView style={{ backgroundColor: '#1f1f1f' }}>
      <View style={styles.container}>

        {/* LEFT */}
        {back ? (
          <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#fff" />
          </TouchableOpacity>
        )}

        {/* CENTER */}
        <Text style={styles.title}>{title}</Text>

        {/* RIGHT */}
        {isHome ? (
          <View style={styles.rightContainer}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.avatar}
            />
          </View>
        ) : (
          <View style={{ width: 36 }} /> // keeps balance when no avatar
        )}

      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60, // cleaner height
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // 🔥 important
    paddingHorizontal: 16,
    position: 'relative',
  },

  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 40, // prevents collapse
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});