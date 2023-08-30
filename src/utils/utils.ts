export function determineTimeOfDay(): boolean {
  const now = new Date();
  const hours = now.getHours();
  return  hours >= 6 && hours < 19;  
}

export const daysOfWeek=["SUN","MON","TUE","WED","THU","FRI","SAT"]