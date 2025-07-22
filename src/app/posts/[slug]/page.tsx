import Header from '@/components/header'

interface Props {
  params: { slug: string }
}

// export async function generateMetadata({ params }: Props) {
//   return { title: params.slug }
// }

// async function getPost(slug: string) {
//   const post = await getBySlug(slug)

//   return post
// }

export default async function PostDetails({ params }: Props) {
  //const post = await getBySlug(params.slug)

  //if (!post) return <NotFound />

  return (
    <div>
      <time className="mb-1 text-sm font-normal leading-none text-neutral-500">
        {/* {post?.created_at?.toString()} */}
      </time>
      <Header backButton title={/*post?.title*/ 'teste'} />
    </div>
  )
}

// export async function generateStaticParams() {
//   return [{slug: '__slug__'}]
// }
