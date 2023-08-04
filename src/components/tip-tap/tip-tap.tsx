'use client'
import { useEffect } from 'react'
import StarterKit from '@tiptap/starter-kit'
import { useEditor, EditorContent } from '@tiptap/react'

import Toolbar from './toolbar'
import Popover from './popover'

interface TipTapProps {
  content: string
  onChangeContent(content: string): void
}

export function TipTap(props: TipTapProps) {
  const { content, onChangeContent } = props

  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      const text = editor.getHTML()
      onChangeContent(text)
    },
    editorProps: {
      attributes: {
        class:
          'px-3 py-2 bg-gray-50 border focus:border-transparent focus:ring-0 focus:outline-none w-full text-black rounded-b-md min-h-[250px]',
      },
    },
  })

  useEffect(() => {}, [])

  if (!editor) {
    return null
  }

  return (
    <div className={`rounded-md border border-transparent`}>
      <Toolbar editor={editor} />
      <Popover editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
