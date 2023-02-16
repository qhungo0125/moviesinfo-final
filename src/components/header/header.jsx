import { useContext } from "react";
import { AppConText } from "../../context/contextProvider";
import './header.css'

function Header() {
  const appValue = useContext(AppConText);
  // const apikey = process.env.REACT_APP_API_KEY

  return (
    <div
      className={appValue.isDark? "header__dark": "header__light"}
    >
      <div className="row mx-0 justify-content-end">
        <div className="col-md-1">
        {/* {"<"+apikey+">"} */}
        </div>
      </div>

        <div className="row mx-0 justify-content-center">
          <div className="col-md-4 text-center">
            <h3>Movies Info</h3>
          </div>
        </div>

        <div className="row mx-0 justify-content-end">
          <div className="form-check form-switch col-md-3 text-right d-flex justify-content-end">
            {/* {console.log("re-render")} */}

            <input id="changeThemeBtn" defaultChecked={appValue.isDark} onChange={
              appValue.toggleTheme
            } className="form-check-input mx-2" type="checkbox" role="switch"/>
            <label className="form-check-label" >Dark Mode</label>
          </div>
        </div>
    </div>
  );
}

export default Header;
