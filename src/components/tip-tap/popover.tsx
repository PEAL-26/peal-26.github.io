import { BubbleMenu, Editor } from '@tiptap/react'

import { LuHeading1, LuHeading2 } from 'react-icons/lu'
import { GrStrikeThrough } from 'react-icons/gr'
import { BiBold, BiItalic } from 'react-icons/bi'
import { RiCodeSSlashLine } from 'react-icons/ri'

// import { setLink } from "@helpers/set-link";

type Props = {
  editor: Editor
}

export default function Popover({ editor }: Props) {
  const isSelectionOverLink = editor.getAttributes('link').href

  return (
    <BubbleMenu
      className="-m-1 flex flex-row gap-1 rounded-md border border-gray bg-black p-1 text-white "
      editor={editor}
    >
      <BiBold name="Bold" onClick={() => editor.chain().focus().toggleBold().run()} />
      <BiItalic name="Italic" onClick={() => editor.chain().focus().toggleItalic().run()} />
      <GrStrikeThrough
        name="Strikethrough"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />
      <LuHeading1
        name="H1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      />
      <LuHeading2
        name="H2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      />
      {/* <Icon
        name={`${isSelectionOverLink ? 'LinkUnlink' : 'Link'}`}
        // onClick={() =>
        //   // isSelectionOverLink
        //   //   ? editor.chain().focus().unsetLink().run()
        //   //   : setLink(editor)
        // }
      /> */}
      <RiCodeSSlashLine
        name="CodeSSlashLine"
        onClick={() => editor.chain().focus().toggleCode().run()}
      />
    </BubbleMenu>
  )
}
