import Header from '@/components/header'
import BiografiaComponent from '@/components/biografia-component'
import ScrollToTopButton from '@/components/scroll-to-top-button'

export const metadata = {
  title: 'Biografia',
  description: '',
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
