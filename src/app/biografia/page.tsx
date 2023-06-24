import BiografiaComponent from '@/components/biografia-component'
import Header from '@/components/header'

export const metadata = {
  title: 'Biografia',
  description: '',
}
export default function Biografia() {
  return (
    <>
      <Header title="Biografia" />
      <BiografiaComponent />
    </>
  )
}
