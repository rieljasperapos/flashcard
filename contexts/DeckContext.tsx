import { staticTopicData } from "@/constants/staticData";
import { createContext, useContext } from "react";
import type { topicData } from "@/types/topic-data";

interface DeckContextProps {
  topic: topicData;
  topics: topicData[];
  isFlipped: any;
  currentCardIndex: number;
  shuffledDeck: topicData["flashcards"];
  isAutoPlaying: boolean;
  isFullscreen: boolean;
  selectTopic: (id: number) => void;
  handleShow: () => void;
  handleShuffle: () => void;
  handleNextCard: () => void;
  handlePrevCard: () => void;
  handleAutoPlay: () => void;
  handleToggleFullscreen: () => void;
}

const defaultTopic = staticTopicData[0];
const defaultDeckContext: DeckContextProps = {
  topic: defaultTopic,
  topics: staticTopicData,
  isFlipped: false,
  currentCardIndex: 0,
  shuffledDeck: defaultTopic.flashcards,
  isAutoPlaying: false,
  isFullscreen: false,
  selectTopic: () => {},
  handleShow: () => {},
  handleShuffle: () => {},
  handleNextCard: () => {},
  handlePrevCard: () => {},
  handleAutoPlay: () => {},
  handleToggleFullscreen: () => {},
};

export const DeckContext = createContext<DeckContextProps>(defaultDeckContext);

export function useDeck() {
  return useContext(DeckContext);
}
