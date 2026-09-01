import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image  } from 'react-native';
import { Login } from './screens/login';
import { SignUp } from './screens/signUp';
import { Cadastro } from './components/Cadastro';

export default function App() {
  
  const siu = () => {
    alert("CERROTE SETE")
  }

  return (
    <SafeAreaView>
      {/* <Login/> */}
      {/* <SignUp></SignUp> */}
      {/* <Cadastro/> */}
    </SafeAreaView>
  );
}
