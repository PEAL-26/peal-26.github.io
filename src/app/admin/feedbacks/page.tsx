import ListFeedbacksAdmin from '@/components/admin/list-feedbacks'

export const metadata = {
  title: 'Feedbacks | Admin',
  description: '',
}

export default function FeedbacksAdminPage() {
  return (
    <div className="my-7 ">
      <ListFeedbacksAdmin />
    </div>
  )
}
