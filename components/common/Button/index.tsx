import styles from './Button.module.scss';
import {useCallback} from "react";
import Link from "next/link";

interface ButtonProps {
  path?: string,
  children: string | JSX.Element;
  type: string;
  onClick?: () => void;
}

export default function Button({ path, children, type, onClick }: ButtonProps) {
  const handleTypeToButtonStyle = useCallback((type: string) => {
    switch (type) {
      case "primary":
        return styles.primary;
      case "default":
        return styles.default;
      case "white":
        return styles.white;
      case "svg":
        return styles.svgBtn;
      default:
        return styles.primary;
    }
  }, []);

  return path
    ? (
      <Link href={path}>
        <a className={handleTypeToButtonStyle(type)}>
          { children }
        </a>
      </Link>
      )
    : (
      <button
        type="button"
        className={handleTypeToButtonStyle(type)}
        onClick={onClick && onClick}
      >
        { children }
      </button>
    )
};