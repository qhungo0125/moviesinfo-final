import { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { AppConText } from "../../context/contextProvider";
import product from "../../api/product";
import { Link } from "react-router-dom";

const Profile = () => {
  let appValue = useContext(AppConText);
  console.log(appValue);

  let [info, setInfo] = useState({});

  useEffect(() => {
    let fetchProfile = async (proId) => {
      let res = await product.getProfileById(proId);
      console.log(res);
      setInfo(res);
    };
    fetchProfile(appValue.status.payload);
  }, []);

  return (
    <div className="profile__container row mx-0">
      <div className="col-md-4 text-end">
        <img
          className="w-50 rounded profile__image"
          src={info.image || undefined}
        ></img>
      </div>
      <div className="col-md-8">
        <p className="profile__fullName">{info.name || "no information"}</p>
        <p className="profile__birthday">
          {" "}
          {info.birthDate || "Birthday: no information"}
        </p>
        <p className="profile__role"> {info.role || "Role: no information"}</p>
      </div>

      <p>Summary: {info.summary || "Summary: no information"}</p>
      <p>
        Knows for:
        {info.knownFor &&
          info.knownFor.map((item) => {
            return (
              <Link
                className="profile__related"
                to="/film"
                key={item.id}
                onClick={(e) => {
                  appValue.changeFilmInfo(item.id);
                }}
              >
                {item.fullTitle}
              </Link>
            );
          })}
      </p>
    </div>
  );
};

export default Profile;
