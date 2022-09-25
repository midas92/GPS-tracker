import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Home } from 'screens';
import { theme } from 'styles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView backgroundColor={theme.default.statusBarBg} />
      <StatusBar style={theme.default.statusBar} />
      <Home />
    </ThemeProvider>
  );
}