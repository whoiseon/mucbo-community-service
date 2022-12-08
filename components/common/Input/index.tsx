import {ChangeEvent, memo, RefObject, useCallback, useRef} from "react";
import styles from "./Input.module.scss";

interface InputProps {
  placeholder?: string,
  readOnly?: boolean,
  ref?: RefObject<HTMLInputElement>,
  type: string,
  style: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, readOnly = false, ref, type, style, value, onChange }: InputProps) => {
  const InputRef = useRef<HTMLInputElement>(null);

  const handleInputStyles = useCallback((style: string) => {
    switch (style) {
      case "default":
        return styles.defaultInput;
      case "border":
        return styles.borderInput;
      default:
        return styles.defaultInput;
    }
  }, []);

  return <input
    type={type}
    ref={ref ? ref : InputRef}
    className={handleInputStyles(style)}
    placeholder={placeholder || ''}
    readOnly={readOnly}
    value={value}
    onChange={onChange}
  />
}

export default memo(Input);