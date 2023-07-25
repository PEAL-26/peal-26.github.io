import { Cartaz } from '../cartaz'
import { Section } from '../section'
import { CartazItemType } from '../cartaz/types'

import { hobbiesData } from './data'
import useChangeSectionTab from '@/hooks/use-change-section-tab'

export function SectionAnimes() {
  const { tabActual, setTabActual } = useChangeSectionTab()

  return (
    <Section.Root autoSize tab={tabActual}>
      <Section.Header title="Animes e Bonecos" description="Explorando o mundo dos animes" />
      <Section.Content>
        <Section.TabBar
          tabs={['Animes', 'Bonecos']}
          classContent="relative"
          onChangeTab={setTabActual}
        >
          {/* Animes */}
          <Cartaz.Container visible={tabActual === 0}>
            {hobbiesData.animes.map((anime: CartazItemType, index: number) => (
              <Cartaz.Item key={index} data={anime} />
            ))}
          </Cartaz.Container>

          {/* Bonecos */}
          <Cartaz.Container visible={tabActual === 1}>
            {hobbiesData.bonecos.map((boneco: CartazItemType, index: number) => (
              <Cartaz.Item key={index} data={boneco} />
            ))}
          </Cartaz.Container>
        </Section.TabBar>
      </Section.Content>
    </Section.Root>
  )
}
