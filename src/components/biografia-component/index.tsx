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
    <div className="flex flex-1 py-7">
      {/* Scrollspy */}
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <div className="flex flex-1 items-start gap-4">
            <div className="flex w-[80%] flex-col items-center gap-8">
              <h1 className="mb-2 max-w-md text-center text-xl font-bold">
                Uma Jornada na Programação: Adaptando-se às Mudanças Tecnológicas
              </h1>

              {CAPITULOS.map(({ id, titulo, conteudo }, index) => (
                <div id={`section-${index}`} key={id} ref={sectionRefs[index]} className={``}>
                  <Title value={titulo} />
                  <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{
                      __html: conteudo.trim().replace(/<p>/g, '<p class="text-left">'),
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="sticky top-[1rem] min-h-screen w-[20%] self-start rounded-md bg-black p-3 ">
              <ul className="flex flex-col gap-3 text-white">
                {CAPITULOS.map(({ id, titulo }, index) => (
                  <li
                    key={index}
                    className={`${
                      verifyCurrentElement(currentElementIndexInViewport, index) ? 'active' : ''
                    }`}
                  >
                    <Link
                      href={`#section-${index}`}
                      className={`leading-0 text-sm transition-all ${
                        verifyCurrentElement(currentElementIndexInViewport, index)
                          ? 'text-primary underline underline-offset-4'
                          : 'hover:underline hover:underline-offset-4 hover:text-primary'
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
