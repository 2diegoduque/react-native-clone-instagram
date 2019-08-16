import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import Follow from "./Follow.js";
import Followers from "./Followers.js";

const screens = {
  Follow: {
    screen: Follow
  },
  Followers: {
    screen: Followers
  }
};

const config = {
  headerMode: "none",
  initialRouteName: "Follow",
  tabBarPosition: "top"
};

const FollowTab = createMaterialTopTabNavigator(screens, config);
export default createAppContainer(FollowTab);
