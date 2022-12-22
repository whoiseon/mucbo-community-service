import {Dispatch, SetStateAction, useCallback, useEffect, useRef, useState} from "react";
import styles from "./Editor.module.scss";

import { Editor as ToastEditor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import '@toast-ui/editor/dist/i18n/ko-kr';

interface EditorProps {
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  height: string,
}

export default function Editor({ value, setValue, height }: EditorProps) {
  const editorRef = useRef<ToastEditor>(null);
  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync']
  ];

  const onChangeEditor = () => {
    const data = editorRef.current?.getInstance().getHTML();

    if (data) {
      setValue(data);
    }
  };

  return (
    <div className={styles.editor}>
      <ToastEditor
        ref={editorRef}
        initialValue=" "
        placeholder="내용을 입력해주세요"
        initialEditType="wysiwyg"
        hideModeSwitch={true}
        height={height}
        theme={''}
        usageStatistics={false}
        toolbarItems={toolbarItems}
        onChange={onChangeEditor}
        plugins={[colorSyntax]}
        language="ko-KR"
      />
    </div>
  )
}