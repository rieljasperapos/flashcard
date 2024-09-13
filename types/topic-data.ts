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

export interface DeckScreenProps {
  topic: topicData;
}

export interface HomePageProps {
  topics: topicData[];
}