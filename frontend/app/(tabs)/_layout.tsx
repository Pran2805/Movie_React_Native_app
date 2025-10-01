import { images } from "@/constants/images";
import React from 'react';
import { Tabs } from 'expo-router';
import { Image, ImageBackground, Text, View } from 'react-native';
import { icons } from "@/constants/icons";

const TabLayout = () => {
  const TabIcon = ({ 
    focused, 
    icon, 
    label 
  }: { 
    focused: boolean; 
    icon: any; 
    label: string;
  }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {focused ? (
            <ImageBackground 
              source={images.highlight} 
              style={{
                flexDirection: 'row',
                minWidth: 110,
                minHeight: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                overflow: 'hidden',
                gap: 8,
              }}
              imageStyle={{ borderRadius: 25 }}
            >
              <Image 
                source={icon} 
                tintColor="#151312"
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
              <Text style={{ 
                color: '#151312', 
                fontSize: 14, 
                fontWeight: '600',
                includeFontPadding: false,
              }}>
                {label}
              </Text>
            </ImageBackground>
          ) : (
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'center', 
              alignItems: 'center',
              padding: 8,
            }}>
              <Image 
                source={icon} 
                tintColor="#6B7280"
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          paddingTop: 4,
          marginBottom: 36,
          height: 50,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.home} 
              label="Home" 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.search} 
              label="Search" 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.save} 
              label="Saved" 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon 
              focused={focused} 
              icon={icons.person} 
              label="Profile" 
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;