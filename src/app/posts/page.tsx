import Header from '@/components/header'
import ListPostsTimeline from '@/components/list-posts-timeline'

export const metadata = {
  title: 'Posts',
  description:
    'Confira meus posts relacionados à programação, onde compartilho insights, tutoriais, dicas e truques. Fique atualizado com as últimas tendências, tecnologias e melhores práticas. Aprenda com minhas experiências e descubra soluções práticas para desafios comuns de programação.',
}

export default function Posts() {
  return (
    <>
      <Header title="Posts" />
      <ListPostsTimeline />
    </>
  )
}
