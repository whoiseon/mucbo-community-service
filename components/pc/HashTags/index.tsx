import styles from "./HashTags.module.scss";

interface HashTagsProps {
  item: string[],
}

export default function HashTags({ item }: HashTagsProps) {
  return (
    <ul className={styles.wrapper}>
      {
        item
          ? (
            item.map((tag, i) => {
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
