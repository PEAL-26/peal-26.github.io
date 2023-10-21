const MILISSEGUNDOS = 1000

export const firebaseTimestampToDate = (seconds: number) => {
  return new Date(seconds * MILISSEGUNDOS)
}

export const dateToFirebaseTimestamp = (date: Date): number => {
  return Math.floor(date.getTime() / MILISSEGUNDOS)
}

export function formatarData(data: Date): string {
  const dataAtual = new Date()
  const umDiaEmMilissegundos = 24 * 60 * 60 * 1000
  const diferencaEmDias = Math.floor((dataAtual.getTime() - data.getTime()) / umDiaEmMilissegundos)

  if (diferencaEmDias <= 7) {
    const horas = data.getHours().toString().padStart(2, '0')
    const minutos = data.getMinutes().toString().padStart(2, '0')

    if (diferencaEmDias === 1) {
      return `Há um dia, ${horas}:${minutos}`
    } else {
      return `Há ${diferencaEmDias} dias, ${horas}:${minutos}`
    }
  } else {
    const dateTime = new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    return dateTime.format(data)
  }
}
