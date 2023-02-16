import { useEffect, useState } from "react";

function MainSlider({header,api, sort, id}) {
  const [movies, setMovies] = useState([]);
  const slideSize = 5;
  const totalSlide = 5;
  const arr = Array.from(Array(totalSlide).keys());

  useEffect(() => {
    fetch(api)
      .then((data) => data.json())
      .then((data) => {
        let arr=data.items.slice(0, slideSize * totalSlide)
        if(sort){
          arr=arr.sort((a,b)=>{
            return parseFloat(b.imDbRating) - parseFloat(a.imDbRating)
          })
        }
        setMovies(arr);
      });
  }, []);

  return (
    <div className="row my-4">
      {header&&<div className="col-md">
        <h5 className="text-start mx-4">{header}</h5>
      </div>}
      <div
      id= {"carouselExampleControls"+id} 
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner col-md-10">
        {arr.map((item) => {
          return (
            <div
              key={item}
              className={item == 0 ? "carousel-item active" : "carousel-item"}
            >
              <div className="row gx-2 justify-content-center">
                {movies
                  .slice(slideSize * item, slideSize * (item + 1))
                  .map((item, index) => {
                    return (
                      <div className="img-card col-md-2">
                          <img
                              key={item.id}
                              src={item.image}
                              className="h-100 img-slider w-100 d-block"
                            />
                            <div onClick={(e)=>{
                              console.log(123);
                            }} className="hidden h-25">
                              <p>
                                {item.title}
                              <br/>
                                Rating: {item.imDbRating}
                              </p>
                            </div>
                            
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#carouselExampleControls"+id} 
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-danger"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#carouselExampleControls"+id} 
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-danger"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}
export default MainSlider;
