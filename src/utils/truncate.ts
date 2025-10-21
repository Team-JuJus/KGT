export function truncateText(
  text: string,
  limit: number,
  addEllipsis: boolean = true,
): string {
  if (!text) return "";
  if (text.length <= limit) return text;

  const truncated = text.slice(0, limit);
  return addEllipsis ? truncated.trimEnd() + "..." : truncated;
}
