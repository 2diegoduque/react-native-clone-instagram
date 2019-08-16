import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./Login";
import SignUp from "./SignUp";

const GuestRouteScreenStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(GuestRouteScreenStack);
