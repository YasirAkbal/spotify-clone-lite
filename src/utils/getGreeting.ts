import { getHours } from 'date-fns';

export function getGreeting(): string {
  const currentHour = getHours(new Date());

  if (currentHour >= 6 && currentHour < 12) {
    return 'Günaydın';
  }

  if (currentHour >= 12 && currentHour < 18) {
    return 'Tünaydın';
  }

  if (currentHour >= 18 && currentHour < 22) {
    return 'İyi akşamlar';
  }

  return 'İyi geceler';
}
