import styles from './Button.module.scss';
import {useCallback} from "react";

interface ButtonProps {
  children: string;
  type: string;
}

export default function Button({ children, type }: ButtonProps) {
  const handleTypeToStyle = useCallback((type: string) => {
    switch (type) {
      case "primary":
        return styles.primary;
      case "default":
        return styles.default;
      case "white":
        return styles.white;
      default:
        return styles.primary;
    }
  }, []);

  return (
    <button type="button" className={handleTypeToStyle(type)}>
      { children }
    </button>
  );
};