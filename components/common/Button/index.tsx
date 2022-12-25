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
  disabled?: boolean
}

export default function Button({ path, children, type, onClick, afterImg, disabled }: ButtonProps) {
  const handleTypeToButtonStyle = useCallback((type: string) => {
    switch (type) {
      case "primary":
        return styles.primary;
      case "primary-100":
        return styles.primary100;
      case "default":
        return styles.default;
      case "white":
        return styles.white;
      case "svg":
        return styles.svgBtn;
      default:
    }
  }, []);

  return path
    ? (
      <Link href={path}>
        <a className={handleTypeToButtonStyle(type)}>
          {
            afterImg && <Image src={afterImg} alt="img" width={14} height={14} />
          }
          { afterImg ? <span>{ children }</span> : children}
        </a>
      </Link>
      )
    : (
      <button
        type="button"
        className={handleTypeToButtonStyle(type)}
        onClick={onClick && onClick}
        disabled={disabled}
      >
        {
          afterImg && <Image src={afterImg} alt="img" width={14} height={14} />
        }
        { afterImg ? <span>{ children }</span> : children}
      </button>
    )
};