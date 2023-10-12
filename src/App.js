import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Authenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

//import { AmplifyAuthCognitoStackTemplate } from '@aws-amplify/cli-extensibility-helper';


//export function override(resources: AmplifyAuthCognitoStackTemplate) {
//  resources.userPool.aliasAttributes = ['email', 'phone_number',];
//}

// phone_number OR email ...

function App({ signOut }) {
  return (
    <Authenticator loginMechanisms={['email']}>
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
    </Authenticator>
  );
}

export default App;