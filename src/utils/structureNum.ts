export function transformStructureNum(input: string): string | number {
  // Check for any digits
  if (/[^0-9]/.test(input)) {
    return input; // return str
  } else {
    return parseInt(input, 10); // return int
  }
}
