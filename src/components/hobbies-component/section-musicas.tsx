import { Section } from '../section'
import { Music, MusicItemDataType } from '../music-component'

import { hobbiesData } from './data'
import useChangeSectionTab from '@/hooks/use-change-section-tab'

export function SectionMusicas() {
  const { tabActual, setTabActual } = useChangeSectionTab()

  return (
    <Section.Root tab={tabActual}>
      <Section.Header
        title="Música"
        description="Afundando nas batidas: descobrindo a diversidade da música que preenche a minha vida"
      />
      <Section.Content>
        <Section.TabBar tabs={['Artistas', 'Géneros']} onChangeTab={setTabActual}>
          {/* Artistas */}
          <Music.Root visible={tabActual === 0}>
            {hobbiesData.musicas.artistas.map((artista: MusicItemDataType, index: number) => (
              <Music.Item key={index} data={artista} iconType="music" />
            ))}
          </Music.Root>

          {/* Géneros */}
          <Music.Root visible={tabActual === 1}>
            {hobbiesData.musicas.generos.map((genero: MusicItemDataType, index: number) => (
              <Music.Item key={index} data={genero} iconType="mic" />
            ))}
          </Music.Root>
        </Section.TabBar>
      </Section.Content>
    </Section.Root>
  )
}
