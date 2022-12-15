import styles from "./HashTags.module.scss";

interface HashTagsProps {
  item: string | string[],
}

export default function HashTags({ item }: HashTagsProps) {
  const arrayHashTag = Array.isArray(item) ? item : item?.split(',');

  return (
    <ul className={styles.wrapper}>
      {
        item
          ? (
            arrayHashTag?.map((tag, i) => {
              return (
                <li key={tag}>{ tag }</li>
              )
            })
          )
          : null
      }
    </ul>
  );
};
