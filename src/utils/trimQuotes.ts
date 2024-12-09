export function trimQuotes(input: string): string {
  return input.replace(/^['"]|['"]$/g, "");
}
