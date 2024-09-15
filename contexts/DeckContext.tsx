import { staticTopicData } from "@/constants/staticData";
import { shuffleArray } from "@/utils/shuffleArray";
import { createContext, ReactNode, useContext, useState } from "react";
import { SharedValue, useSharedValue } from "react-native-reanimated";
import type { topicData } from "@/types/topic-data";

interface DeckContextProps {
  topic: topicData;
  topics: topicData[];
  isFlipped: any;
  currentCardIndex: number;
  shuffledDeck: topicData["flashcards"];
  isAutoPlaying: boolean;
  selectTopic: (id: number) => void;
  handleShow: () => void;
  handleShuffle: () => void;
  handleNextCard: () => void;
  handlePrevCard: () => void;
  handleAutoPlay: () => void;
}

// Default values for the context
const defaultTopic = staticTopicData[0];  // Assuming you always have at least one topic
const defaultDeckContext: DeckContextProps = {
  topic: defaultTopic,
  topics: staticTopicData,
  isFlipped: { value: false },
  currentCardIndex: 0,
  shuffledDeck: defaultTopic.flashcards,
  isAutoPlaying: false,
  selectTopic: () => {},
  handleShow: () => {},
  handleShuffle: () => {},
  handleNextCard: () => {},
  handlePrevCard: () => {},
  handleAutoPlay: () => {},
};

export const DeckContext = createContext<DeckContextProps>(defaultDeckContext);

export function useDeck() {
  return useContext(DeckContext);
}