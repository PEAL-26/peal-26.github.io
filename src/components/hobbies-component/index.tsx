'use client'

import { useState, useEffect } from 'react'

import Loading from '../loading'
import { Section } from '../section'

export default function HobbiesComponent() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="my-7 flex flex-col gap-6">
      {/* Section Animes */}
      <Section.Root>
        <Section.Header title="Animes e Bonecos" description="Explorando o mundo dos animes" />
        <Section.TabBar tabs={['Animes', 'Bonecos']}>
          {/* Filmes */}
          <>Filmes</>

          {/* Séries */}
          <>Séries</>
        </Section.TabBar>
      </Section.Root>

      {/* Section Filmes e Series */}
      <Section.Root>
        <Section.Header title="Filmes e Séries" />
        <Section.TabBar tabs={['Filmes', 'Séries']}>
          {/* Filmes */}
          <>Filmes</>

          {/* Séries */}
          <>Séries</>
        </Section.TabBar>
      </Section.Root>

      {/* Section Música */}
      <Section.Root>
        <Section.Header
          title="Música"
          description="Afundando nas batidas: descobrindo a diversidade da música que preenche a minha vida"
        />
        <Section.TabBar tabs={['Artistas', 'Géneros']}>
          {/* Artistas */}
          <div>Artistas</div>

          {/* Géneros */}
          <div>Géneros</div>
        </Section.TabBar>
      </Section.Root>

      {/* Section Livros */}
      <Section.Root>
        <Section.Header title="Livros" />
      </Section.Root>

      {/* Section Desporto */}
      <Section.Root>
        <Section.Header title="Desporto" />
      </Section.Root>
    </div>
  )
}
