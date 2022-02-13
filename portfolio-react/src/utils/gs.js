const gs = (n = 2, includeUnits = true) => {
  const pixels = n * 8;
  if (!includeUnits) return pixels;
  return `${pixels}px`;
};

export default gs;
