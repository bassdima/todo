import { dataFooterInformBar } from "../../constants";
import styles from "../../styles/informBarStyles/FooterInformBar.module.css";

const FooterInformBar = () => {
    return(
        <footer>
            <p className={styles["information-bar__footer-text"]}>{dataFooterInformBar.text}
                <a className="source-link" href={dataFooterInformBar.link}>{` ${dataFooterInformBar.linkTitle}`}</a>.
            </p>
      </footer>
    );
}

export default FooterInformBar;