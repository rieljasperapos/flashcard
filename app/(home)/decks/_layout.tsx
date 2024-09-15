import { DeckProvider } from "@/providers/DeckProvider";
import { Stack } from "expo-router";

export default function DecksLayout() {
  return (
    <DeckProvider>
      <Stack>
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
      </Stack>
    </DeckProvider>
  );
}
