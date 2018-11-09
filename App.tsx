
import { HomePage } from "./src/components/HomePage/HomePage";
import { SizeQuestionPage } from "./src/components/SizeQuestionPage/SizeQuestionPage";
import { LivingQuestionPage } from "./src/components/LivingQuestionPage/LivingQuestionPage";
import {
  createStackNavigator,
} from "react-navigation";

export default createStackNavigator({
  HomePage: { screen: HomePage },
  SizeQuestionPage: { screen: SizeQuestionPage },
  LivingQuestionPage: { screen: LivingQuestionPage }
},
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  });
