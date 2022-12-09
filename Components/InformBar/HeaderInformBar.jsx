import { Fragment } from "react";
import { dataHeaderInformBar } from "../../constants";

const HeaderInformBar = () => {
    return(
        <>
            <h3>React</h3>
            <div className="header-links">
                {dataHeaderInformBar.map((item) => {
                    return <Fragment key={item.id}>
                        <h5 className="header-links__title">{item.title}</h5>
                        {Object.keys(item.sources).map((itemKey) => {  
                            return <a key={item.sources[itemKey]} className="source-link" href={item.sources[itemKey]}>{itemKey}</a>
                        })}
                    </Fragment>
                })}
            </div>
        </>
    );
}

export default HeaderInformBar;
