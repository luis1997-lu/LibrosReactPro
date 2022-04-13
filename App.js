import React from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import MainNavigator from './src/navigator';
import { GlobalProvider } from './src/context/global/global.context';
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

function App({authData}) {
    return(
        <GlobalProvider authData={authData}>
      <MainNavigator />
    </GlobalProvider>
    )
}
export default withAuthenticator(App);