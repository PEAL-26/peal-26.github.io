'use client'
import { BsStars } from 'react-icons/bs'
import { AiOutlineLoading } from 'react-icons/ai'

import { TipTap } from '@/components/tip-tap'
import { useRegisterPost } from './use-register-post'

export default function RegisterPost() {
  const {
    post,
    waitSaving,
    isResuming,
    isLoadingVerifySlug,

    setPost,
    saveFile,
    verifySlug,
    resumeContent,
  } = useRegisterPost()

  return (
    <div className="flex min-h-screen flex-1 gap-4">
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="title"
            value={post?.title}
            // onChange={(e) => setPost({ ...post, title: e.target.value })}
            onBlur={verifySlug}
            className="block w-full rounded-lg border border-transparent bg-gray-50 p-2.5 text-sm text-black focus:border-transparent focus:ring-0"
            placeholder="Titulo"
          />
          <span className="flex items-center gap-1">
            {post?.slug}
            <AiOutlineLoading
              size={16}
              data-show={isLoadingVerifySlug}
              className="animate-spin fill-primary text-primary data-[show=false]:hidden"
            />
          </span>
        </div>

        <TipTap
          content={post?.content || ''}
          onChangeContent={(content) => {
            post && setPost({ ...post, content })
          }}
        />

        <div className="flex flex-col gap-1">
          <button
            type="button"
            onClick={resumeContent}
            data-wait={isResuming}
            disabled={isResuming}
            className="flex items-center justify-center gap-1 rounded-md border border-primary px-3 py-2 text-center text-white data-[wait=true]:cursor-wait"
          >
            <AiOutlineLoading
              size={20}
              data-show={isResuming}
              className="animate-spin fill-white text-white data-[show=false]:hidden"
            />
            Resumir
            <BsStars
              size={20}
              data-wait={isResuming}
              className="fill-primary text-primary data-[wait=true]:animate-bounce"
            />
          </button>
          <textarea
            rows={5}
            name="resume"
            disabled={isResuming}
            data-wait={isResuming}
            placeholder="Resumo do conteudo"
            className="block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-black focus:border-transparent focus:ring-0 data-[wait=true]:cursor-wait"
            onChange={(e) => {
              post && setPost({ ...post, resume: e.target.value })
            }}
          >
            {post?.resume}
          </textarea>
        </div>
      </div>
      <div className="flex w-[20%] flex-col">
        <div className="w-full">
          <button
            type="button"
            onClick={saveFile}
            data-saving={waitSaving}
            disabled={waitSaving}
            className="flex items-center justify-center gap-1 rounded-md bg-primary px-3 py-2 text-center text-white data-[saving=true]:cursor-wait w-full"
          >
            Guardar
            <AiOutlineLoading
              size={16}
              data-show={waitSaving}
              className="animate-spin fill-white text-white data-[show=false]:hidden"
            />
          </button>
        </div>
        <div className="flex-1">alguma outra informação relacionada ao POST</div>
      </div>
    </div>
  )
}
