import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppConText } from "../../context/contextProvider";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const { profile } = props;
  console.log("profile: ", profile);
  const appValue = useContext(AppConText)


  return (
      <div
        key={profile&&profile.id}
        className={"col-md-2 profileCard__container zoom m-2"}
      >
        <img
          effect="blur"
          src={profile&&profile.image}
          className="h-100 w-100 d-block profileCard__image"
        />
        <div
          className={appValue.isDark ? "profileCard__sub dark text-center" : "profileCard__sub light text-center"}
        >
            
          <p>
            {profile&&profile.title}
          </p>
          <p>
            {profile&&profile.description}
          </p>

          <Link className="btn btn-danger" 
          onClick={(e) => {
            appValue.changeProfile(profile.id);
          }}
          to="/profile">
            more info
          </Link>

        </div>
      </div>
  );
};

export default ProfileCard;
