import { Cartaz } from '../cartaz'
import { Section } from '../section'
import { CartazItemType } from '../cartaz/types'

import { hobbiesData } from './data'
import useChangeSectionTab from '@/hooks/use-change-section-tab'

export function SectionFilmesSeries() {
  const { tabActual, setTabActual } = useChangeSectionTab()

  return (
    <Section.Root autoSize tab={tabActual}>
      <Section.Header title="Filmes e Séries" />
      <Section.Content>
        <Section.TabBar
          tabs={['Filmes', 'Séries']}
          classContent="relative"
          onChangeTab={setTabActual}
        >
          {/* Filmes */}
          <Cartaz.Container visible={tabActual === 0}>
            {hobbiesData.filmes.map((filme: CartazItemType, index: number) => (
              <Cartaz.Item key={index} data={filme} />
            ))}
          </Cartaz.Container>

          {/* Séries */}
          <Cartaz.Container visible={tabActual === 1}>
            {hobbiesData.series.map((serie: CartazItemType, index: number) => (
              <Cartaz.Item key={index} data={serie} />
            ))}
          </Cartaz.Container>
        </Section.TabBar>
      </Section.Content>
    </Section.Root>
  )
}
