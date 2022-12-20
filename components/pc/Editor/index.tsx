import {Dispatch, SetStateAction, useEffect, useRef} from "react";

import { Editor as ToastEditor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

interface EditorProps {
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
}

export default function Editor({ value, setValue }: EditorProps) {
  const editorRef = useRef<ToastEditor>(null);
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync']
  ]

  return (
    <div>
      <ToastEditor
        ref={editorRef}
        initialValue=""
        initialEditType="wysiwyg"
        hideModeSwitch={true}
        height="300px"
        theme={''}
        usageStatistics={false}
        toolbarItems={toolbarItems}
        plugins={[colorSyntax, ]}
      />
    </div>
  )
}