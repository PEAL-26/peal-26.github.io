const MILISSEGUNDOS = 1000

export const firebaseTimestampToDate = (seconds: number) => {
  return new Date(seconds * MILISSEGUNDOS)
}

export const dateToFirebaseTimestamp = (date: Date): number => {
  return Math.floor(date.getTime() / MILISSEGUNDOS)
}
