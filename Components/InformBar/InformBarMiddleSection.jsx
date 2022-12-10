import { Fragment } from "react";
import { dataInformBarMiddleSection } from "../../constants";
import styles from "../../styles/informBarStyles/InformBarMiddleSection.module.css";

const InformBarMiddleSection = () => {
    return (
        <>
            {dataInformBarMiddleSection.map((item) => {
                return <Fragment key={item.id}>
                    <h4 className={styles["title-for-unordered-list"]}>{item.title}</h4>
                    <ul className={styles["unordered-list"]}>
                        {Object.keys(item.sources).map((itemKey) => {
                            return <li key={item.sources[itemKey]}><a className="source-link" href={item.sources[itemKey]}>{itemKey}</a> </li>
                        })}
                    </ul>
                </Fragment>
            })}
        </>
    );
}

export default InformBarMiddleSection;
