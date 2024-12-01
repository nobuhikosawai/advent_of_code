import * as fs from "fs";
import * as path from "path";

let file = "/input.txt";

function readInput(file: string): string[] {
  return fs
    .readFileSync(path.join(import.meta.dir, file), "utf-8")
    .trim()
    .split("\n");
}

function part1(sample: boolean = false) {
  if (sample) {
    file = "/sample.txt";
  }

  const inputs = readInput(file);
  const larr: number[] = [];
  const rarr: number[] = [];
  inputs.forEach((input) => {
    const [left, right] = input.split("   ").map(Number);
    larr.push(left);
    rarr.push(right);
  });

  const slarr = larr.toSorted((a, b) => a - b);
  const srarr = rarr.toSorted((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < slarr.length; i++) {
    res += Math.abs(slarr[i] - srarr[i]);
  }

  console.log(res);
}

// part1();

function part2(sample: boolean = false) {
  if (sample) {
    file = "/sample.txt";
  }

  const inputs = readInput(file);
  const larr: number[] = [];
  const rarr: number[] = [];
  inputs.forEach((input) => {
    const [left, right] = input.split("   ").map(Number);
    larr.push(left);
    rarr.push(right);
  });

  const map = new Map<number, number>();

  rarr.forEach((num) => {
    const count = map.get(num) ?? 0;
    map.set(num, count + 1);
  });

  let res = 0;
  larr.forEach((num) => {
    res += num * (map.get(num) ?? 0);
  });

  console.log(res);
}
part2();
