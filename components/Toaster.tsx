import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useToasterStore } from '@/stores/toasterStore';
import { cn } from '@/shared/cn';
import { X } from 'lucide-react-native';

interface ToasterProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Toaster: React.FC = () => {
  const { message, type, isOpen, closeToaster } = useToasterStore();
  const slideAnim = useRef(new Animated.Value(-300)).current; // Start off-screen

  useEffect(() => {
    if (isOpen) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen, slideAnim]);

  const backgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateX: slideAnim }],
        },
      ]}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-white">{message}</Text>
        <TouchableOpacity onPress={closeToaster}>
          <X color="white" size={20} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 0,
    padding: 16,
    backgroundColor: '#333',
    borderRadius: 8,
    zIndex: 1000,
  },
});

export default Toaster;
