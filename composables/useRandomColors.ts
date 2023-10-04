import { ref } from 'vue';

export function useRandomColors(howMany: number = 12) {
  const colors = ref<string[]>([]);

  const generateRandomHexColor = (): string => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  const generateRandomColors = (): void => {
    const randomColors: string[] = [];
    for (let i = 0; i < howMany; i++) {
      randomColors.push(generateRandomHexColor());
    }
    colors.value = randomColors;
  };

  generateRandomColors();

  return {
    colors,
    // generateRandomColors,
  };
}