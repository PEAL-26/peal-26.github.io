'use client'
import { useState, useEffect } from 'react'

import Loading from '../loading'
import { SectionLivros } from './section-livros'
import { SectionAnimes } from './section-animes'
import { SectionMusicas } from './section-musicas'
import { SectionFilmesSeries } from './section-filmes-series'

export default function HobbiesComponent() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="my-7 flex flex-col gap-6">
      <SectionAnimes />
      <SectionFilmesSeries />
      <SectionMusicas />
      <SectionLivros />
    </div>
  )
}
