import styles from "./Gif.module.css";

export function Gif({ title, id, url }) {
    return (
        <a href={`#${id}`} className={styles.Gif}>
            <h4>{title}</h4>
            <img alt={title} src={url} />
        </a>
    )
}
