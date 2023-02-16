import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppConText } from "../../context/contextProvider";
import "./itemCarousel.css"
import clsx from "clsx";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function ItemCarousel(props) {
  const { item,slideSize, zoom } = props;
  const appValue = useContext(AppConText);

  return (
    <div key={item.id}

      className={clsx("film",{
        "col-md-4": slideSize==1,
        "col-md-2": !(slideSize==1),
        "zoom": zoom
      })}
      
      >
      <img
      effect="blur"
      src={item.image} className="h-100 w-100 d-block film__image" />
      <div
        
        className={appValue.isDark? "film__info dark" : "film__info light"}
      >
        <p>
          {item.title}
          <br />
          Rating: {item.imDbRating}
        </p>
        <Link 
        onClick={(e) => {
          appValue.changeFilmInfo(item.id);
        }}
        className="btn btn-danger" to="/film">more info</Link>
      </div>
      
    </div>
  );
}

export default ItemCarousel;
