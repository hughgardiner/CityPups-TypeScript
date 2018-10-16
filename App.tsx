
import {HomePage} from "./src/components/HomePage/HomePage";
import {SizeQuestionPage} from "./src/components/SizeQuestionPage/SizeQuestionPage";
import {
  createStackNavigator,
} from "react-navigation";

export default createStackNavigator({
  // HomePage: { screen: HomePage },
  HomePage: { screen: HomePage },
  SizeQuestionPage: { screen: SizeQuestionPage },
},
{
  headerMode: "none",
    navigationOptions: {
        headerVisible: false,
    },
});
