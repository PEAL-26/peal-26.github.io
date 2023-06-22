'use client'

import { useRef } from 'react'
import { Scrollspy } from '@makotot/ghostui'

import Title from '../title'
import BiografiaSection from '../biografia-section'

import { CAPITULOS } from './data'

// const SIZE = 9
// const list = new Array(SIZE).fill(0)

const setListSectionsRefs = (length: number) => Array.from({ length }, () => useRef<HTMLDivElement>(null))


export default function BiografiaComponent() {
  const sectionRefs = setListSectionsRefs(CAPITULOS.length)

  console.log(sectionRefs);

  const verifyCurrentElement = (current: number, element: number) => {
    return current === element ? 'active' : ''
  }

  return (
    <div className="py-5">
      {/* Scrollspy */}
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <div className="relative  flex flex-row gap-3">
            <div className="w-[80%]">
              {CAPITULOS.map(({ id, titulo, conteudo }, index) => (
                <BiografiaSection
                  id={`section-${id}`}
                  key={id}
                  ref={sectionRefs[index]}
                  className={verifyCurrentElement(currentElementIndexInViewport, index)}
                >
                  <Title value={titulo} />
                  {conteudo}
                </BiografiaSection>
              ))}
            </div>
            <div className=" border-l border-neutral-500">
              <div className="fixed right-7 ">
                {CAPITULOS.map(({ id, titulo }, i) => (
                  <li key={i} className={currentElementIndexInViewport === i ? 'active' : ''}>
                    <a
                      href={`#section-${id}`}
                      style={{
                        color: currentElementIndexInViewport === i ? '#f00' : '#222',
                      }}
                    >
                      {titulo}
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </div>
        )}
      </Scrollspy>
    </div>
  )
}
