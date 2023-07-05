import Header from '@/components/header'
import HobbiesComponent from '@/components/hobbies-component'

export const metadata = {
  title: 'Hobbies',
  description:
    'Além da programação, tenho interesses e hobbies relacionados ao mundo da tecnologia. Saiba mais sobre meus hobbies e como eles se conectam à minha vida como desenvolvedor. Descubra como esses interesses influenciam minha abordagem criativa e inovadora na programação.',
}

export default function Hobbies() {
  return (
    <>
      <Header title="Hobbies" />
      <HobbiesComponent />
    </>
  )
}
