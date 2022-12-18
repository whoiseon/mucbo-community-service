import {useEffect, useRef} from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import styles from "./Editor.module.scss";

export default function Editor({ onChange, editorLoaded, name, value }: any) {
  const editorRef = useRef<any>();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
    }
  }, [])

  return (
    <div className={styles.editor}>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            console.log({ event, editor, data })
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  )
}