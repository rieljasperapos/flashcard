import { StyleProp, ViewStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";

interface flashCards {
  question: string;
  answer: string;
};

export interface topicData {
  id: number;
  title: string;
  uri: string;
  numberOfCards: number;
  flashcards: flashCards[];
};

export interface FlipCardProps {
  isFlipped: SharedValue<boolean>;
  cardStyle: StyleProp<ViewStyle>;
  direction: string;
  duration: number;
  FrontContent: () => JSX.Element;
  BackContent: () => JSX.Element;
}