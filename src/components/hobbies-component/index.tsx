'use client'
import { useState, useEffect } from 'react'

import Loading from '../loading'
import { Cartaz } from '../cartaz'
import { Section } from '../section'
import { Livro, LivroItemType } from '../livro'
import { CartazItemType } from '../cartaz/types'
import { Music, MusicItemDataType } from '../music-component'

import { hobbiesData } from './data'

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
      <Section.Root autoSize>
        <Section.Header title="Animes e Bonecos" description="Explorando o mundo dos animes" />
        <Section.Content>
          <Section.TabBar tabs={['Animes', 'Bonecos']} classContent="relative">
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
      <Section.Root autoSize>
        <Section.Header title="Filmes e Séries" />
        <Section.Content>
          <Section.TabBar tabs={['Filmes', 'Séries']} classContent="relative">
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
            <Music.Root>
              {hobbiesData.musicas.artistas.map((artista: MusicItemDataType, index: number) => (
                <Music.Item key={index} data={artista} iconType="music" />
              ))}
            </Music.Root>

            {/* Géneros */}
            <Music.Root>
              {hobbiesData.musicas.generos.map((genero: MusicItemDataType, index: number) => (
                <Music.Item key={index} data={genero} iconType="mic" />
              ))}
            </Music.Root>
          </Section.TabBar>
        </Section.Content>
      </Section.Root>

      {/* Section Livros */}
      <Section.Root>
        <Section.Header title="Livros" />
        <Section.Content>
          <Livro.Root>
            {hobbiesData.livros.map((livro: LivroItemType, index: number) => (
              <Livro.Item key={index} data={livro} />
            ))}
          </Livro.Root>
        </Section.Content>
      </Section.Root>

      {/* TODO: por fazer */}
      {/* Section Desporto */}
      {/* <Section.Root>
        <Section.Header title="Desporto" />
        <Section.Content></Section.Content>
      </Section.Root> */}
    </div>
  )
}
