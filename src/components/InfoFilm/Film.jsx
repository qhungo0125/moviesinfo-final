import React, { useContext, useEffect, useRef, useState } from "react";
import product from "../../api/product";
import { AppConText } from "../../context/contextProvider";
import "./film.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

function Film() {
  const [info, setInfo] = useState({});
  const appValue = useContext(AppConText);
  
  useEffect(() => {
    const fetchFilmInfo = async () => {
      let id = appValue.status.payload;
      console.log("id get from: ", id);
      let res = await product.getFilmById(id);
      setInfo(res);
      console.log(res);
    };
    fetchFilmInfo();
  }, [appValue.status.payload]);

  console.log("re-render: ", info);

  useEffect(()=>{
    // document.getElementById("scroll").scrollIntoView()
    window.scrollTo(0,0);
  },[info.title])

  return (
    <div className="filmInfo__container my-4 row mx-0 justify-content-center">
      <div className="col-md-4 text-center">
        <LazyLoadImage
          effect="blur"
          className="filmInfo__image"
          src={info?.image || ""}
        />
        <h3>{info.fullTitle}</h3>
        <p className="my-0">⏳ {info.runtimeStr}</p>
        <p className="my-0">Genres: {info.genres}</p>
        <p className="my-0">Release Date: {info.releaseDate}</p>
      </div>

      <div className="col-md-4">
        <div className="row mx-0">
          <div className="col-md-3">
            <h5 style={{ textAlign: "left" }}>Directors</h5>
          </div>
          <div className="col-md-9">
            <p style={{ textAlign: "left" }} className="mx-2">
              {console.log(info.directorList)}
              {info.directorList &&
                info.directorList.map((director) => {
                  return (
                    <Link
                      to="/profile"
                      onClick={(e)=>{
                        appValue.changeProfile(director.id)
                      }}
                      className="filmInfo__director"
                      key={director.id}
                    >
                      {director.name}
                    </Link>
                  );
                })}
            </p>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-3">
            <h5 style={{ textAlign: "left" }}>Actors:</h5>
          </div>
          <div className="col-md-9">
            <p style={{ textAlign: "left" }} className="mx-2">
              {info.actorList &&
                info.actorList
                  .map((actor) => {
                    return actor.name;
                  })
                  .join(" ,")}
            </p>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-3">
            <h5 style={{ textAlign: "left" }}>Language:</h5>
          </div>
          <div className="col-md-9">
            <p style={{ textAlign: "left" }} className="mx-2">
              {info.languages}
            </p>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-3">
            <h5 style={{ textAlign: "left" }}>Plot:</h5>
          </div>
          <div className="col-md-9">
            <p style={{ textAlign: "left" }} className="mx-2">
              {info.plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Film;
