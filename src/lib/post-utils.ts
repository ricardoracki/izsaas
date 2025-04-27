/**
 *
 * @param date Date
 * @description Verifica se a data é recente (dentro de 7 dias)
 * @returns boolean
 */

export const isRecent = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diff / (1000 * 3600 * 24));
  return diffInDays <= 7;
};
