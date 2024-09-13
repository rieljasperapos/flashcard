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