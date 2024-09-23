import { StyleSheet, Text, View } from 'react-native';

import * as RnAlertPrompt from 'rn-alert-prompt';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{RnAlertPrompt.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
