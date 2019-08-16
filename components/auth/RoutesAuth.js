import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import { Icon } from "react-native-elements";

import Home from "./Home.js";
import Search from "./Search.js";
import Add from "./Add.js";
import Profile from "./Profile.js";
import Poster from "./Poster.js";
import Comments from "./Comments.js";

import FollowTab from "./FollowTab";

const homeScreenStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: "Profile"
    })
  },
  Poster: {
    screen: Poster,
    navigationOptions: ({ navigation }) => ({
      title: "Poster"
    })
  },
  Comments: {
    screen: Comments,
    navigationOptions: ({ navigation }) => ({
      title: "Comments"
    })
  }
});

homeScreenStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.routes[navigation.state.index].routeName == "Comments") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const searchScreenStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: "Search"
    })
  },
  Poster: {
    screen: Poster,
    navigationOptions: ({ navigation }) => ({
      title: "Poster"
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: "Profile"
    })
  },
  Comments: {
    screen: Comments,
    navigationOptions: ({ navigation }) => ({
      title: "Comments"
    })
  }
});

const addScreenStack = createStackNavigator({
  Add: {
    screen: Add,
    navigationOptions: ({ navigation }) => ({
      title: "Add"
    })
  }
});

const followScreenStack = createStackNavigator({
  FollowTab: {
    screen: FollowTab,
    navigationOptions: {
      header: null
    }
  },
  Poster: {
    screen: Poster,
    navigationOptions: ({ navigation }) => ({
      title: "Poster"
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: "Profile"
    })
  },
  Comments: {
    screen: Comments,
    navigationOptions: ({ navigation }) => ({
      title: "Comments"
    })
  }
});

const profileScreenStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: "Profile"
    })
  },
  Poster: {
    screen: Poster,
    navigationOptions: ({ navigation }) => ({
      title: "Poster"
    })
  },
  Comments: {
    screen: Comments,
    navigationOptions: ({ navigation }) => ({
      title: "Comments"
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: homeScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => <Icon name="home" type="octicon" color={tintColor} />
      })
    },
    Search: {
      screen: searchScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => <Icon name="search" type="octicon" color={tintColor} />
      })
    },
    Add: {
      screen: addScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => <Icon name="diff-added" type="octicon" color={tintColor} />
      })
    },
    Follow: {
      screen: followScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => <Icon name="heart" type="octicon" color={tintColor} />
      })
    },
    ProfileUser: {
      screen: profileScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => <Icon name="person" type="octicon" color={tintColor} />
      })
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "Search", "Add", "Follow", "ProfileUser"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#000",
      showLabel: false
    }
  }
);

export default createAppContainer(RootStack);
