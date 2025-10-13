export function toHexColorString(value: number): string {
  const hex = value.toString(16).padStart(6, "0");
  return `#${hex}`;
}

export function darkenColor(color: number, amount: number): number {
  let r = (color >> 16) & 0xff;
  let g = (color >> 8) & 0xff;
  let b = color & 0xff;

  r = Math.max(0, Math.floor(r * (1 - amount)));
  g = Math.max(0, Math.floor(g * (1 - amount)));
  b = Math.max(0, Math.floor(b * (1 - amount)));

  return (r << 16) | (g << 8) | b;
}
