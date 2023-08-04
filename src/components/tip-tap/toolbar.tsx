import { Editor } from '@tiptap/react'

import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from 'react-icons/lu'
import { AiOutlineLink } from 'react-icons/ai'
import { GoListOrdered, GoListUnordered } from 'react-icons/go'
import { GrStrikeThrough } from 'react-icons/gr'
import { BiBold, BiItalic } from 'react-icons/bi'
import { BsParagraph, BsTextWrap } from 'react-icons/bs'
import { MdFormatClear } from 'react-icons/md'
import {
  RiCodeSSlashLine,
  RiCodeBoxLine,
  RiLinkUnlink,
  RiDoubleQuotesL,
  RiPageSeparator,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
} from 'react-icons/ri'

import { Divider } from '../divider'

type Props = {
  editor: Editor
}

export default function Toolbar({ editor }: Props) {
  const isCursorOverLink = editor.getAttributes('link').href

  return (
    <div className={`flex h-10  w-full items-center rounded-t-md border-none  bg-black`}>
      <div className="flex h-full items-center gap-4 px-4 font-black text-white">
        <BiBold name="Bold" onClick={() => editor.chain().focus().toggleBold().run()} />
        <BiItalic name="Italic" onClick={() => editor.chain().focus().toggleItalic().run()} />
        <GrStrikeThrough
          name="Strikethrough"
          onClick={() => editor.chain().focus().toggleStrike().run()}
        />
        <RiCodeSSlashLine
          name="CodeSSlashLine"
          onClick={() => editor.chain().focus().toggleCode().run()}
        />

        <Divider color="gray" />

        <LuHeading1
          name="H1"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        />
        <LuHeading2
          name="H2"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        />
        <LuHeading3
          name="H3"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        />
        <LuHeading4
          name="H4"
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        />
        <LuHeading5
          name="H5"
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        />
        <LuHeading6
          name="H6"
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        />
        <BsParagraph name="Paragraph" onClick={() => editor.chain().focus().setParagraph().run()} />
        <GoListOrdered
          name="ListOrdered"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />
        <GoListUnordered
          name="ListUnordered"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
        <RiCodeBoxLine
          name="CodeBoxLine"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        />
        <Divider color="gray" />

        {/* <AiOutlineLink name="Link" onClick={() => () => setLink(editor)} />

        <RiLinkUnlink
          name="LinkUnlink"
          className={`${!isCursorOverLink ? 'pointer-events-none text-gray' : ''}`}
          onClick={() => () => setLink(editor)}
        /> */}

        <Divider color="gray" />

        <RiDoubleQuotesL
          name="DoubleQuotesL"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        />

        <RiPageSeparator
          name="Separator"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        />
        <Divider color="gray" />

        <BsTextWrap name="TextWrap" onClick={() => editor.chain().focus().setHardBreak().run()} />

        <MdFormatClear
          name="FormatClear"
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        />

        <Divider color="gray" />
        <RiArrowGoBackLine
          name="ArrowGoBackLine"
          onClick={() => editor.chain().focus().undo().run()}
        />
        <RiArrowGoForwardLine
          name="ArrowGoForwardLine"
          onClick={() => editor.chain().focus().redo().run()}
        />
      </div>
    </div>
  )
}
