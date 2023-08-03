import { BubbleMenu, Editor } from "@tiptap/react";

// import { setLink } from "@helpers/set-link";
import Icon from "./icon";

type Props = {
  editor: Editor;
};

export default function Popover({ editor }: Props) {
  const isSelectionOverLink = editor.getAttributes("link").href;

  return (
    <BubbleMenu className="bg-primary text-white rounded-md p-1 -m-1 flex flex-row gap-1 " editor={editor}>
      <Icon
        name="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <Icon
        name="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <Icon
        name="Strikethrough"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />
      <Icon
        name="H1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      />
      <Icon
        name="H2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      />
      <Icon
        name={`${isSelectionOverLink ? "LinkUnlink" : "Link"}`}
        // onClick={() =>
        //   // isSelectionOverLink
        //   //   ? editor.chain().focus().unsetLink().run()
        //   //   : setLink(editor)
        // }
      />
      <Icon
        name="CodeSSlashLine"
        onClick={() => editor.chain().focus().toggleCode().run()}
      />
    </BubbleMenu>
  );
}
