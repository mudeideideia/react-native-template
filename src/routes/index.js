import React from "react";
import { ActivityIndicator } from "react-native";
import { getStyles } from '../contexts/userPreferences'

import { useAuth } from "../contexts/auth";

import AuthRoutes from "../routes/auth.route";
import AppRoutes from "../routes/app.route";

const Routes = () => {
  const { signed, loading } = useAuth();
  
const { StyledView } = getStyles()

  if (loading) {
    return (
      <StyledView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </StyledView>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;