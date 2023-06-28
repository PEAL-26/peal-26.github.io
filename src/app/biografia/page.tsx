import Header from '@/components/header'
import BiografiaComponent from '@/components/biografia-component'
import ScrollToTopButton from '@/components/scroll-to-top-button'

export const metadata = {
  title: 'Biografia',
  description:
    'Conheça mais sobre mim e minha jornada na programação. Descubra minha paixão pela tecnologia desde cedo e como me tornei um desenvolvedor apaixonado. Leia minha biografia para saber mais sobre minhas habilidades, conquistas e experiências no mundo da programação.',
}

export default function Biografia() {
  return (
    <>
      <Header title="Biografia" />
      <BiografiaComponent />
      <ScrollToTopButton />
    </>
  )
}
