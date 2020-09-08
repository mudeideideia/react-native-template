import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/auth'
import { getStyles } from '../../contexts/userPreferences'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const SignInPage = () => {

  const { signIn } = useAuth()
  const { StyledView } = getStyles()

  const handleSignIn = () => {
    signIn()
  }

  return (
    <StyledView style={styles.container}>
      <Button title="Sign In" onPress={handleSignIn} />
    </StyledView>
  )
}

export default SignInPage;