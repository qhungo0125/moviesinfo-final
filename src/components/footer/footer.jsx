import { useContext, useMemo } from "react"
import { AppConText } from "../../context/contextProvider";
// import style from "./footer.module.css"
import clsx from "clsx"
import "./footer.css"

function Footer(){
    const appValue = useContext(AppConText)
    
    return(
        <div
        className={appValue.isDark ? "footer__dark": "footer__light"}
        >
            <div
            className="row mx-0 justify-content-center py-2"
            >
            {"<Ngo Quang Hung>"}
            </div>
        </div>
    )
}

export default Footer