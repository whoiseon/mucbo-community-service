import {useState} from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../Editor"), { ssr: false });

export default function WritePage() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>TUI EDITOR</h1>
      <Editor value={value} setValue={setValue} />
    </div>
  );
};
