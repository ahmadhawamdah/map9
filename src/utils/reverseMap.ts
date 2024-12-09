// Reverse mapping: from service name to its integer key
export const reverseMap = (map: { [key: string]: string }) => {
  return Object.entries(map).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {} as { [key: string]: string });
};
