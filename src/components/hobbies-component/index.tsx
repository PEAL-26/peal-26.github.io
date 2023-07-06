'use client'

import { useState, useEffect, Key } from 'react'

import Loading from '../loading'
import { Cartaz } from '../cartaz'
import { Section } from '../section'

import { hobbiesData } from './data'
import { CartazItemType } from '../cartaz/types'

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
          {/* Animes */}
          <Cartaz.Container className="w-full">
            {hobbiesData.animes.map((anime: CartazItemType, index: number) => (
              <Cartaz.Item key={index} data={anime} />
            ))}
          </Cartaz.Container>

          {/* Bonecos */}
          <Cartaz.Container>
            {hobbiesData.bonecos.map((boneco: CartazItemType, index: number) => (
              <Cartaz.Item key={index} data={boneco} />
            ))}
          </Cartaz.Container>
        </Section.TabBar>
      </Section.Root>

      {/* Section Filmes e Series */}
      <Section.Root>
        <Section.Header title="Filmes e Séries" />
        <Section.TabBar tabs={['Filmes', 'Séries']}>
          {/* Filmes */}
          <Cartaz.Container>
            {/* {hobbiesData.filmes.map((filme, index) => (
              <Cartaz.Item key={index} data={filme} />
            ))} */}
          </Cartaz.Container>

          {/* Séries */}
          <Cartaz.Container>
            {/* {hobbiesData.series.map((serie, index) => (
              <Cartaz.Item key={index} data={serie} />
            ))} */}
          </Cartaz.Container>
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
