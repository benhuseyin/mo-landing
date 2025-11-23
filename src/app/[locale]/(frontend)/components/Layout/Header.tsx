import { Fragment } from "react/jsx-runtime";
import DesktopHeader from "./Header/DesktopHeader";
import MobileHedaer from "./Header/MobileHeader";

const Header = () => {

    return (
        <Fragment>
            <DesktopHeader />
            <MobileHedaer />
        </Fragment>
    );
};

export default Header;
