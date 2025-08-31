import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from '@/components/ui/Button';
import { submitSkillTest } from '@/services/api';
import { useScores } from '@/store/scores';
import { useRouter } from 'expo-router';
import { questions } from '@/features/skilltest/data/questions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SkillTestScreen = () => {
  const [answers, setAnswers] = useState({});
  const { setScores } = useScores();
  const router = useRouter();

  const handleAnswer = (skill, question, value) => {
    setAnswers({
      ...answers,
      [skill]: {
        ...answers[skill],
        [question]: value,
      },
    });
  };

  const handleSubmit = async () => {
    try {
      const scores = await submitSkillTest(answers);
      setScores(scores);
      await AsyncStorage.setItem('skillTestDone', 'true');
      router.replace('/results');
    } catch (error) {
      console.error('Error submitting skill test:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Skill Test</Text>
      {Object.keys(questions).map((skill) => (
        <View key={skill} style={styles.skillSection}>
          <Text style={styles.skillTitle}>{skill}</Text>
          {questions[skill].map((question, index) => (
            <View key={index} style={styles.questionSection}>
              <Text style={styles.questionText}>{question}</Text>
              <View style={styles.answerOptions}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <TouchableOpacity
                    key={value}
                    style={[
                      styles.answerButton,
                      answers[skill]?.[question] === value && styles.selectedAnswer,
                    ]}
                    onPress={() => handleAnswer(skill, question, value)}
                  >
                    <Text style={styles.answerText}>{value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  skillSection: {
    marginBottom: 20,
  },
  skillTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionSection: {
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  answerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  answerButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  selectedAnswer: {
    backgroundColor: '#6495ED',
  },
  answerText: {
    fontSize: 16,
  },
});

export default SkillTestScreen;
