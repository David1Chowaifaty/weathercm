export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
export function determineTimeOfDay(): boolean {
  const now = new Date();
  const hours = now.getHours();
  return  hours >= 6 && hours < 19;  
}
