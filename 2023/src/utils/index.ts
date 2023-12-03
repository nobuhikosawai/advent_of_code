export function assert(input: any): asserts input {
  if (!input) {
    throw new Error("Assertion failed");
  }
}
