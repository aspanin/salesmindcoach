import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Welcome to Sales Mind Coach',
    description: 'Improve your mental health and productivity as a sales professional.',
  },
  {
    id: '2',
    title: 'Personalized Development Plans',
    description: 'Get tailored plans to enhance your skills and well-being.',
  },
  {
    id: '3',
    title: 'Track Your Progress',
    description: 'Monitor your improvements and stay motivated.',
  },
];

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem('alreadyLaunched', 'true');
      router.replace('/skilltest');
    } catch (e) {
      console.error('Error saving onboarding status:', e);
      router.replace('/skilltest');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.slide}>
        <Text style={styles.title}>{slides[currentSlide].title}</Text>
        <Text style={styles.description}>{slides[currentSlide].description}</Text>
      </View>
      <View style={styles.buttons}>
        {currentSlide < slides.length - 1 ? (
          <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  slide: {
    width: width - 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttons: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6495ED',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
