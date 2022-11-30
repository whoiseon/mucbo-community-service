import {ChangeEvent, memo} from "react";
import styles from "./Input.module.scss";

interface InputProps {
  placeholder?: string,
  readOnly?: boolean,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 *
 * @param placeholder string
 * @param readOnly  boolean
 * @param value string
 * @param onChange  onChange function
 */

const Input = ({ placeholder, readOnly = false, value, onChange }: InputProps) => {
  return <input
    type="text"
    className={styles.defaultInput}
    placeholder={placeholder || ''}
    readOnly={readOnly}
    value={value}
    onChange={onChange}
  />
}

export default memo(Input);