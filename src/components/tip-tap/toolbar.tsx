import { Editor } from '@tiptap/react'

// import { setLink } from "@helpers/set-link";
// import Divider from "@components/atoms/divider";

import Icon from './icon'

type Props = {
  editor: Editor
}

export default function Toolbar({ editor }: Props) {
  const isCursorOverLink = editor.getAttributes('link').href

  return (
    <div className={`flex h-10  w-full items-center rounded-t-md border-none  bg-primary/30`}>
      <div className="flex h-full items-center gap-4 px-4 font-black text-[#333333]">
        <Icon name="Bold" onClick={() => editor.chain().focus().toggleBold().run()} />
        <Icon name="Italic" onClick={() => editor.chain().focus().toggleItalic().run()} />
        <Icon name="Strikethrough" onClick={() => editor.chain().focus().toggleStrike().run()} />
        <Icon name="CodeSSlashLine" onClick={() => editor.chain().focus().toggleCode().run()} />

        {/* <Divider /> */}

        <Icon name="H1" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} />
        <Icon name="H2" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} />
        <Icon name="H3" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
        <Icon name="H4" onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} />
        <Icon name="H5" onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} />
        <Icon name="H6" onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()} />
        <Icon name="Paragraph" onClick={() => editor.chain().focus().setParagraph().run()} />
        <Icon name="ListOrdered" onClick={() => editor.chain().focus().toggleBulletList().run()} />
        <Icon
          name="ListUnordered"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
        <Icon name="CodeBoxLine" onClick={() => editor.chain().focus().toggleCodeBlock().run()} />
        {/* <Divider />

        <Icon name="Link" onClick={() => () => setLink(editor)} /> */}

        {/* <Icon
          name="LinkUnlink"
          className={`${!isCursorOverLink ? 'pointer-events-none text-gray' : ''}`}
          onClick={() => () => setLink(editor)}
        />

        <Divider /> */}

        <Icon
          name="DoubleQuotesL"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        />

        <Icon name="Separator" onClick={() => editor.chain().focus().setHorizontalRule().run()} />
        {/* <Divider /> */}

        <Icon name="TextWrap" onClick={() => editor.chain().focus().setHardBreak().run()} />

        <Icon
          name="FormatClear"
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        />

        {/* <Divider /> */}
        <Icon name="ArrowGoBackLine" onClick={() => editor.chain().focus().undo().run()} />
        <Icon name="ArrowGoForwardLine" onClick={() => editor.chain().focus().redo().run()} />
      </div>
    </div>
  )
}
