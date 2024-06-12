import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/router/routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </SafeAreaView>
  );
}
