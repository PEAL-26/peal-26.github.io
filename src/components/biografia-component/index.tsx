'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Scrollspy } from '@makotot/ghostui'

import Title from '../title'
import BiografiaSection from '../biografia-section'

import { CAPITULOS } from './data'

const setListSectionsRefs = (length: number) =>
  Array.from({ length }, () => useRef<HTMLDivElement>(null))

export default function BiografiaComponent() {
  const sectionRefs = setListSectionsRefs(CAPITULOS.length)

  const verifyCurrentElement = (current: number, element: number) => {
    return current === element
  }

  return (
    <div className="container-biografia py-5">
      {/* Scrollspy */}
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <div className="relative flex flex-row gap-3">
            <div className="flex w-full lg:w-[80%] flex-col gap-7">
              {CAPITULOS.map(({ id, titulo, conteudo }, index) => (
                <div id={`section-${index}`} key={id} ref={sectionRefs[index]} className={``}>
                  <Title value={titulo} />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec maximus
                    justo. Aliquam vitae tristique ante. Lorem ipsum dolor sit amet, consectetur
                    adipiscing jghjhjhh khjhhkhb jhjhjhbhbhj jbjhbhjbhbjhbjhbjbjhbjhbjbjh jhbjhbjhbjhbjhbjb jhbjhbjbjb jbjhjb jhbjhbjhb jhbjhbjhb jbjhbjh jhbjhbjbjjhbjhb jhjhbjgg
                  </p>
                  <div
                    className="mt-3 "
                    dangerouslySetInnerHTML={{
                      __html: conteudo.replace(/<p>/g, '<p class="">'),
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block lg:border-l border-neutral-500">
              <ul className="fixed right-7 mb-6 flex flex-col gap-1 rounded-md bg-black p-3 text-white">
                {CAPITULOS.map(({ id, titulo }, index) => (
                  <li
                    key={index}
                    className={`${
                      verifyCurrentElement(currentElementIndexInViewport, index) ? 'active' : ''
                    }`}
                  >
                    <Link
                      href={`#section-${index}`}
                      className={`text-xs transition-all ${
                        verifyCurrentElement(currentElementIndexInViewport, index)
                          ? 'text-primary underline underline-offset-4'
                          : ''
                      }`}
                    >
                      {titulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Scrollspy>
    </div>
  )
}
