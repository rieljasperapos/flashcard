import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Dimensions } from "react-native";
import DeckHeader from "@/components/DeckHeader";
import DeckButtons from "./DeckButtons";
import FlipCard from "./FlipCard";

import ProgressBar from "./ProgressBar";
import * as ScreenOrientation from 'expo-screen-orientation';
import CircularProgress from 'react-native-circular-progress-indicator';

import { useDeck } from "@/contexts/DeckContext";

export default function DeckScreen() {
  const {
    topic,
    isFlipped,
    currentCardIndex,
    shuffledDeck,
    handleShow,
  } = useDeck();

  const FrontContent = () => {
    return (
      <Pressable onPress={handleShow} onLongPress={handleToggleFullscreen}>
        <View style={styles.card}>

          <Text style={styles.question}>
            {shuffledDeck[currentCardIndex].question}
          </Text>
        </View>
      </Pressable>

    )
  }

  const BackContent = () => {
    return (
      <Pressable onPress={handleShow} onLongPress={handleToggleFullscreen}>
        <View style={styles.card}>
          <Text style={styles.question}>
            {shuffledDeck[currentCardIndex].answer}
          </Text>
        </View>
      </Pressable>
    )
  }
  );

  async function handleToggleFullscreen() {
    if (isFullscreen == false) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
    setIsFullscreen(!isFullscreen);
  }

  return (
    <View style={[styles.container, isFullscreen && {padding: 0}]}>
      {!isFullscreen &&(
        <>
          <DeckHeader onToggleFullscreen={handleToggleFullscreen}/>
          <Text style={styles.progress}>
          {currentCardIndex + 1} of {shuffledDeck.length} cards
          </Text>
        </>
        
      )}
      <DeckHeader />
      <Text style={styles.progress}>
        {currentCardIndex + 1} of {shuffledDeck.length} cards
      </Text>
      <TouchableOpacity onPress={handleShow}>
        <FlipCard 
          isFlipped={isFlipped} 
          cardStyle={[styles.flipCard, isFullscreen && { height: '100%', width: '100%'}]}
          direction='y'
          duration={500}
          FrontContent={FrontContent}
          BackContent={BackContent}
        />
      </TouchableOpacity>
      
      {isFullscreen && (
        <>
          <Text style={[styles.hint, { top: 10 }]}>
            long press to enter / exit fullscreen
          </Text>
          <Pressable style={styles.leftSide} onPress={handlePrevCard} />

          <View style={styles.circularProgressContainer}>
            <CircularProgress
              progressValueStyle={{ fontSize: 20 }}
              value={currentCardIndex + 1}
              radius={30}
              progressValueColor={'#f5945c'}
              activeStrokeColor={'#f39c12'}
              inActiveStrokeColor={'#9b59b6'}
              inActiveStrokeOpacity={0.5}
              inActiveStrokeWidth={40}
              activeStrokeWidth={20}
              maxValue={shuffledDeck.length}
              duration={200}
            />
          </View>

          <Pressable style={styles.rightSide} onPress={handleNextCard} />
          <Text style={[styles.hint, { bottom: 10 }]}>
            tap the left or right side to navigate
          </Text>
          
        </>
      )}

      {!isFullscreen && (
        <ProgressBar
        totalCards={shuffledDeck.length}
        currentCardIndex={currentCardIndex}/>
      )}



      {!isFullscreen && (
        <DeckButtons />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  progress: {
    fontSize: 16,
    color: "#718096",
    textAlign: "center",
    marginVertical: 20,
  },
  hint: {
    fontSize: 12,
    color: '#A0AEC0',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10, // Optional: Add some margin to position it slightly below the top
    position: 'absolute',
  },
  card: {
    backgroundColor: "#F7FAFC",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    height: 400,
  },
  question: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 30,
  },
  flipCard: {
    width: '100%',
    height: 400
  },
  fullscreenIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  leftSide: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '15%',
    backgroundColor: 'rgba(0, 0, 0, 0.01)'
  },
  rightSide: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '15%',
    backgroundColor: 'rgba(0, 0, 0, 0.01)'
  },
  circularProgressContainer: {
    position: 'absolute',
    top: 40,
    right: 35,
  },
});
