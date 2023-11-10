import { defineStore } from 'pinia';
import { getRandomBit } from '../utils';

const textLines = [
  '',
  'BOGDAN',
  'KOLESNYK',
  '',
  'WEB SOLUTIONS',
  'ARCHITECTURE',
  '& DEVELOPMENT',
  '',
];

const startPad = 4;
const endPad = 1;
const separator = ' ';
const longestLineLength = [...textLines].sort((a, b) => b.length - a.length)[0]
  .length;
const placeholderRowsCount = 4;

const placeholderLines = Array.from({
  length: placeholderRowsCount,
}).fill('') as Array<string>;

function addPaddings(lines: Array<string>) {
  return lines.map((line) =>
    line
      .padStart(longestLineLength + startPad, separator)
      .padEnd(longestLineLength + startPad + endPad, separator),
  );
}

function buildRowsOfChars(lines: Array<string>) {
  return lines.map((line) =>
    [...line].map((char) => {
      const isBit = char === separator;
      return {
        isBit,
        char: isBit ? getRandomBit() : char,
      };
    }),
  );
}

const paddedTextLines = addPaddings(textLines);
const paddedPlaceholderLines = addPaddings(placeholderLines);

export const useCharMatrixStore = defineStore('charMatrix', {
  state: () => ({
    rowsOfChars: buildRowsOfChars(paddedTextLines),
    placeholderRowsOfChars: buildRowsOfChars(paddedPlaceholderLines),
  }),
  actions: {
    reBuildRowsOfChars() {
      this.rowsOfChars = buildRowsOfChars(paddedTextLines);
      this.placeholderRowsOfChars = buildRowsOfChars(paddedPlaceholderLines);
    },
  },
});
