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
  setShowAnswer: any;
  showAnswer: boolean;
  setCurrentCardIndex: any;
  currentCardIndex: number;
  handleShuffle: () => void;
  handleShow: () => void;
  handleAutoPlay: () => void;
  handlePrevCard: () => void;
  handleNextCard: () => void;
  isAutoPlaying: boolean;
}