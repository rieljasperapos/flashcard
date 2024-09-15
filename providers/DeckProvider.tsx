import React, { ReactNode, useState, useEffect } from "react";
import { shuffleArray } from "@/utils/shuffleArray";
import { useSharedValue } from "react-native-reanimated";
import { staticTopicData } from "@/constants/staticData";
import { DeckContext } from "@/contexts/DeckContext";

export function DeckProvider({ children }: { children: ReactNode }) {
  const [topicIndex, setTopicIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [shuffledDeck, setShuffledDeck] = useState(staticTopicData[topicIndex].flashcards);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const isFlipped = useSharedValue(false);

  const topic = staticTopicData[topicIndex];
  const topics = staticTopicData;

  const selectTopic = (id: number) => {
    setTopicIndex(id);
    setShuffledDeck(staticTopicData[id].flashcards); // Reset shuffled deck
    setCurrentCardIndex(0); // Reset card index
    isFlipped.value = false;
  };

  const handleShow = () => {
    isFlipped.value = !isFlipped.value;
  };

  const handleShuffle = () => {
    const shuffled = shuffleArray(topic.flashcards);
    setShuffledDeck(shuffled);
    setCurrentCardIndex(0);
    isFlipped.value = false;
  };

  const handleNextCard = () => {
    if (currentCardIndex < shuffledDeck.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      isFlipped.value = false;
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      isFlipped.value = false;
    }
  };

  const handleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
  };

  useEffect(() => {
    let autoPlayInterval: any;
    if (isAutoPlaying && currentCardIndex <= shuffledDeck.length - 1) {
      let cardCycleTime = 0;
      autoPlayInterval = setInterval(() => {
        if (cardCycleTime === 0) {
          isFlipped.value = false;
        }

        if (cardCycleTime === 1500) {
          isFlipped.value = true;
        }

        if (cardCycleTime === 3000) {
          setCurrentCardIndex((prevIndex) =>
            prevIndex + 1 === shuffledDeck.length ? 0 : prevIndex + 1
          );
          isFlipped.value = false;
          cardCycleTime = 0;
          return;
        }

        cardCycleTime += 100;
      }, 200);
    } else {
      clearInterval(autoPlayInterval);
      setIsAutoPlaying(false);
    }

    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [isAutoPlaying, currentCardIndex, shuffledDeck.length]);

  return (
    <DeckContext.Provider
      value={{
        topic,
        topics,
        isFlipped,
        currentCardIndex,
        shuffledDeck,
        isAutoPlaying,
        selectTopic,
        handleShow,
        handleShuffle,
        handleNextCard,
        handlePrevCard,
        handleAutoPlay,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
}
