export const formatCount = (count: number) => {
  const videoCount = Number(count);
  if (videoCount >= 10000000) {
    return `${Math.floor(videoCount / 10000000)}천만`;
  } else if (videoCount >= 10000) {
    return `${Math.floor(videoCount / 10000)}만`;
  } else if (videoCount >= 1000) {
    return `${Math.floor(videoCount / 1000)}천`;
  }
  return videoCount.toString();
};
