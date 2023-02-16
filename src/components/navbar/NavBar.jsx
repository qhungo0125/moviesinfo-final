import { AppConText } from "../../context/contextProvider"
import { useContext, useState } from "react"
import clsx from "clsx"
import style from "./NavBar.module.css"
import './navbar.css'
import { Link } from "react-router-dom";


function NavBar(){
    const appValue = useContext(AppConText)
    const [searchContent, setSearchContent]=useState("")
    // console.log(searchContent);

    return(
        <div
        className={appValue.isDark? "nav__dark": "nav__light"}
        >
            <div
            className="nav__container row mx-0 justify-content-between"
            >
                <div className="col-md-1 align-self-center"
                >
                    <Link to="/"
                    onClick={(e)=>{
                        appValue.changeHome()
                    }}
                    className={appValue.isDark? "homebtn text-light": "homebtn text-dark"}
                    >home</Link>

                </div>
                <div className= "offset-md-6 col-md-4 d-flex justify-content-end">
                    <input placeholder="fims, actor, actress..." 
                    className="mx-2 form-control"
                    onChange={(e)=>{
                        setSearchContent(e.target.value)
                    }}
                    />

                    <Link 
                    to="/search"
                    className={appValue.isDark? "btn btn-success ": "btn btn-warning"}
                    onClick={(e)=>{
                        appValue.changeSearch(searchContent)
                    }}>Search
                    </Link>

                </div>
            </div>
        </div>
    )
}
 export default NavBar