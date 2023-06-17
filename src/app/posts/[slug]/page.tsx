'use client'

import Header from '@/components/header'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  return { title: params.slug }
}

export default function Posts({ params }: Props) {
  return (
    <div>
      <time className="mb-1 text-sm font-normal leading-none text-neutral-500">
        Janeiro de 2023
      </time>
      <Header urlBtnBack="/posts" title={params.slug} />
    </div>
  )
}
