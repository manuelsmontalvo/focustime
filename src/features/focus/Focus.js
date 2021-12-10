import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>What would you like to focus on?</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onSubmitEditing={({ nativeEvent: { text } }) => {
            setSubject(text);
          }}
        />
        <RoundedButton
          style={styles.addSubject}
          size={50}
          title="+"
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    padding: spacing.md,
    fontSize: fontSizes.lg,
  },
  textInput: {
    flex: 1,
  },
  addSubject: { marginLeft: 10, alignSelf: 'center' },
});
