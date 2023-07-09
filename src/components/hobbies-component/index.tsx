'use client'

import { useState, useEffect, Key, useRef } from 'react'

import Loading from '../loading'
import { Cartaz } from '../cartaz'
import { Section } from '../section'

import { hobbiesData } from './data'
import { CartazItemType } from '../cartaz/types'

export default function HobbiesComponent() {
  const [loading, setLoading] = useState(true)
  const [maxHeightCartaz, setMaxHeightCartaz] = useState(0)

  useEffect(() => {
    // const paddingBottom = 24
    // if (cartazRef.current?.clientHeight)
    //   setMaxHeightCartaz(cartazRef.current.clientHeight + paddingBottom)

    // const sectionElement = cartazRef?.current
    // const contentElement = sectionElement.querySelector('.content')
    // const contentHeight = contentElement.offsetHeight
    // sectionElement.style.height = `${contentHeight}px`

    setLoading(false)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="my-7 flex flex-col gap-6">
      {/* Section Animes */}
      <Section.Root className={`flex flex-col`}>
        <Section.Header title="Animes e Bonecos" description="Explorando o mundo dos animes" />
        <Section.Content>
          <Section.TabBar tabs={['Animes', 'Bonecos']}>
            {/* Animes */}
            <Cartaz.Container>
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
        </Section.Content>
      </Section.Root>

      {/* Section Filmes e Series */}
      <Section.Root>
        <Section.Header title="Filmes e Séries" />
        <Section.Content>
          <Section.TabBar tabs={['Filmes', 'Séries']}>
            {/* Filmes */}
            <Cartaz.Container>
              {hobbiesData.filmes.map((filme: CartazItemType, index: number) => (
                <Cartaz.Item key={index} data={filme} />
              ))}
            </Cartaz.Container>

            {/* Séries */}
            <Cartaz.Container>
              {hobbiesData.series.map((serie: CartazItemType, index: number) => (
                <Cartaz.Item key={index} data={serie} />
              ))}
            </Cartaz.Container>
          </Section.TabBar>
        </Section.Content>
      </Section.Root>

      {/* Section Música */}
      <Section.Root>
        <Section.Header
          title="Música"
          description="Afundando nas batidas: descobrindo a diversidade da música que preenche a minha vida"
        />
        <Section.Content>
          <Section.TabBar tabs={['Artistas', 'Géneros']}>
            {/* Artistas */}
            <div>Artistas</div>

            {/* Géneros */}
            <div>Géneros</div>
          </Section.TabBar>
        </Section.Content>
      </Section.Root>

      {/* Section Livros */}
      <Section.Root>
        <Section.Header title="Livros" />
        <Section.Content></Section.Content>
      </Section.Root>

      {/* Section Desporto */}
      <Section.Root>
        <Section.Header title="Desporto" />
        <Section.Content></Section.Content>
      </Section.Root>
    </div>
  )
}
