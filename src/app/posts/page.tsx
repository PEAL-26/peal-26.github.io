import Header from '@/components/header'
import ListPostsTimeline from '@/components/list-posts-timeline'

export const metadata = {
  title: 'Posts',
  description: '',
}

export default function Posts() {
  return (
    <div>
      <Header title="Posts" />
      <ListPostsTimeline />
    </div>
  )
}
