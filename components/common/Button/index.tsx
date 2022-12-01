import styles from './Button.module.scss';
import {useCallback} from "react";
import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  path?: string,
  children: string | JSX.Element;
  type: string;
  onClick?: () => void;
  afterImg?: string;
}

export default function Button({ path, children, type, onClick, afterImg }: ButtonProps) {
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
          {
            afterImg && <Image src={afterImg} alt="img" width={14} height={14} />
          }
          <span>{ children }</span>
        </a>
      </Link>
      )
    : (
      <button
        type="button"
        className={handleTypeToButtonStyle(type)}
        onClick={onClick && onClick}
      >
        {
          afterImg && <Image src={afterImg} alt="img" width={14} height={14} />
        }
        <span>{ children }</span>
      </button>
    )
};