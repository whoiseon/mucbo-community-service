import Editor from "../Editor";
import {useEffect, useState} from "react";

export default function WritePage() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <h1>CKEditor 5</h1>
      <Editor
        name="write"
        onChange={(data: any) => {
          setData(data)
        }}
        value={data}
        editorLoaded={editorLoaded}
      />
      {JSON.stringify(data)}
    </div>
  );
};
