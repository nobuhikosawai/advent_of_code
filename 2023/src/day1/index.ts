import * as fs from "fs";
import * as path from "path";
import { assert } from "../utils";

let file = "/input.txt";

function readInput(file: string): string[] {
  return fs
    .readFileSync(path.join(import.meta.dir, file), "utf-8")
    .trim()
    .split("\n");
}

function part1() {
  if (process.env.SAMPLE === "true") {
    file = "/sample1.txt";
  }

  const inputs = readInput(file);
  const res = inputs.reduce((acc, input) => {
    const numbers = input.match(/\d/g);
    assert(numbers);
    assert(numbers.length > 0);
    const num = Number(numbers[0] + numbers[numbers.length - 1]);
    acc += num;
    return acc;
  }, 0);

  console.log(res);
}

// part1();

const numberMap: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function getFirstMatch(input: string) {
  const numbers = input.match(
    /\d|one|two|three|four|five|six|seven|eight|nine/g,
  );

  assert(numbers);
  assert(numbers.length > 0);
  return numberMap[numbers[0]] ?? numbers[0];
}

function getLastMatch(input: string): string {
  for (let i = input.length - 1; i >= 0; i--) {
    const chars = input.slice(i);
    const numbers = chars.match(
      /\d|one|two|three|four|five|six|seven|eight|nine/g,
    );
    if (numbers) {
      return numberMap[numbers[0]] ?? numbers[0];
    }
  }
  throw new Error();
}

function part2() {
  if (process.env.SAMPLE === "true") {
    file = "/sample2.txt";
  }

  const inputs = readInput(file);
  const res = inputs.reduce((acc, input) => {
    const num = Number(getFirstMatch(input) + getLastMatch(input));

    acc += num;
    return acc;
  }, 0);
  console.log(res);
}

part2();
