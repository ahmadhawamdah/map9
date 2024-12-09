export const convertLatitude = (rawLat: number): number => {
  return rawLat / 1000000; // Divide by 1,000,000 to get decimal degrees
};

export const convertLongitude = (rawLong: number): number => {
  return -rawLong / 1000000;
};
