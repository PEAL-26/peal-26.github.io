const MILISSEGUNDOS = 1000

export const firebaseTimestampToDate = (seconds: number) => {
  return new Date(seconds * MILISSEGUNDOS)
}

