import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { useAuth } from '../../contexts/auth'
import { getStyles } from '../../contexts/userPreferences'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const Main = () => {
  const { user, signOut } = useAuth();

  const { StyledView, StyledText } = getStyles()


  function handleSignOut() {
    signOut();
  }

  return (
    <StyledView style={styles.container}>
      <StyledText>{user?.name}</StyledText>
      <Button title="Sign Out" onPress={handleSignOut} />
    </StyledView>
  );
};
export default Main;