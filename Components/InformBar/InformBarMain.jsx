import HeaderInformBar from "./HeaderInformBar";
import HorizontalRule from "./HorizontalRule";
import BlockQuote from "./BlockQuote";
import InformBarMiddleSection from "./InformBarMiddleSection";
import FooterInformBar from "../InformBar/FooterInformBar";
import styles from "../../styles/informBarStyles/InformBarMain.module.css";

const InformationBarMain = () => {
    return(
        <div className={styles["information-bar"]}>
            <HeaderInformBar />
            <HorizontalRule />
            <BlockQuote />
            <HorizontalRule />
            <InformBarMiddleSection />
            <HorizontalRule />
            <FooterInformBar />
        </div>
    );
}

export default InformationBarMain;
