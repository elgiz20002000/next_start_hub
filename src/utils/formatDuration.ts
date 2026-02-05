export function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+)H/);
  if (match) {
    const hours = parseInt(match[1], 10);
    return `${hours} hours`;
  }
  return duration;
}
