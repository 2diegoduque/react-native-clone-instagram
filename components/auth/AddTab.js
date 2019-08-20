import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import OpenGallery from "./OpenGallery.js";
import OpenCamera from "./OpenCamera.js";

const screens = {
  Gallery: {
    screen: OpenGallery
  },
  Camera: {
    screen: OpenCamera
  }
};

const config = {
  headerMode: "none",
  initialRouteName: "Gallery",
  tabBarPosition: "bottom"
};

const AddTab = createMaterialTopTabNavigator(screens, config);
export default createAppContainer(AddTab);
