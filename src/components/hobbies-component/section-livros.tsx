import { Section } from '../section'
import { Livro, LivroItemType } from '../livro'

import { hobbiesData } from './data'

export function SectionLivros() {
  return (
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
  )
}
