import { dataBlockQuote } from "../../constants";
import styles from "../../styles/informBarStyles/BlockQuote.module.css"

const BlockQuote = () => {
    return(
        <blockquote className={styles["quote-section"]}>
        <div className={styles["speech-bubble"]}>
          <p className={styles["speech-bubble__quote"]}>{dataBlockQuote.quote}</p>
        </div>
        <a className={`source-link ${styles["quote-section__link"]}`}
            href={dataBlockQuote.link}>
            {dataBlockQuote.linkTitle}
        </a>
      </blockquote>
    );
}

export default BlockQuote;