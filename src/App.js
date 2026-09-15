import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image  } from 'react-native';
import { Login } from './screens/login';
import { SignUp } from './screens/signUp';
import { Home } from './screens/home';
import { Products } from './screens/Products';
import { Contato } from './screens/Contact';

export default function App() {
  
  const siu = () => {
    alert("CERROTE SETE")
  }

  return (
    <SafeAreaView>
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Home/> */}
      {/* <Products/> */}
      <Contato/>
    </SafeAreaView>
  );
}
