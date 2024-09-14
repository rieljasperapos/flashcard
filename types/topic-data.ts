import { ReactNode } from "react";
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

export interface TopicProps {
  topic: topicData;
}

export interface HomePageProps {
  topics: topicData[];
}

export interface DeckButtonsInterface {
  topic: topicData;
  currentCardIndex: number;
  handleShuffle: () => void;
  handleShow: () => void;
  handleAutoPlay: () => void;
  handlePrevCard: () => void;
  handleNextCard: () => void;
  isAutoPlaying: boolean;
}

export interface DeckProps {
  Deck: flashCards;
}

export interface FlipCardProps {
  isFlipped: SharedValue<boolean>;
  cardStyle: StyleProp<ViewStyle>;
  direction: string;
  duration: number;
  FrontContent: () => JSX.Element;
  BackContent: () => JSX.Element;
}