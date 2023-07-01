'use client'

import { useEffect, useRef, useState } from 'react'
import { Scrollspy } from '@makotot/ghostui'

import Subtitle from '../subtitle'
import ScrollspyMenu from '../scrollspy-menu'

import useSticked from '@/hooks/use-sticked'

import { CAPITULOS } from './data'
import { setListRefs } from '@/helpers/refs'
import Loading from '../loading'

const PRIMEIRO_ELEMENTO = 0

export default function BiografiaComponent() {
  const [isLoading, setIsLoading] = useState(true)

  const sectionRefs = setListRefs<HTMLDivElement>(CAPITULOS.length)
  const { isSticked, refSticker } = useSticked()

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) return <Loading />

  return (
    <div className="my-7 flex flex-1">
      {/* Scrollspy */}
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <div className="flex flex-1 flex-col-reverse items-start gap-4 md:flex-row">
            <div className="flex w-full flex-col items-center gap-8 md:w-[70%] lg:w-[80%]">
              <h1 className="mb-2 max-w-md  text-center text-xl font-bold uppercase">
                Uma Jornada na Programação: Adaptando-se às Mudanças Tecnológicas
              </h1>

              {CAPITULOS.map(({ id, titulo, conteudo }, index) => (
                <div key={id} id={`capitulo-${id}`} ref={sectionRefs[index]} className={``}>
                  <Subtitle ref={index === PRIMEIRO_ELEMENTO ? refSticker : null} value={titulo} />

                  <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{
                      __html: conteudo
                        .trim()
                        .replace(/<p>/g, '<p class="text-left text-base leading-relaxed">'),
                    }}
                  ></div>
                </div>
              ))}
            </div>

            <ScrollspyMenu
              sectionRefs={sectionRefs}
              current={currentElementIndexInViewport}
              menus={CAPITULOS.map(({ id, titulo }) => ({ id, titulo }))}
              isSticked={isSticked}
            />
          </div>
        )}
      </Scrollspy>
    </div>
  )
}
